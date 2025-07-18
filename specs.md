# การออกแบบข้อมูลจำเพาะ API

## โครงสร้าง Base URL

```
/api/v1/files/*
/api/v1/shares/*
/api/v1/admin/*
```

## Endpoints การจัดการไฟล์

### GET /api/v1/files

**วัตถุประสงค์**: แสดงรายการไฟล์ทั้งหมดพร้อมการแบ่งหน้าและการกรอง

```typescript
Query Parameters:
- page?: number (ค่าเริ่มต้น: 1)
- limit?: number (ค่าเริ่มต้น: 50)
- search?: string
- sort?: 'name' | 'size' | 'date' | 'type'
- order?: 'asc' | 'desc'
- type?: string (กรองตาม mime type)

Response:
{
  files: {
    id: string,
    filename: string,
    size: number,
    mimeType: string,
    createdAt: string,
    minioKey: string
  }[],
  pagination: {
    page: number,
    limit: number,
    total: number,
    totalPages: number
  }
}
```

### POST /api/v1/files/upload-url

**วัตถุประสงค์**: สร้าง presigned URL สำหรับอัปโหลดไฟล์ไปยัง MinIO โดยตรง

```typescript
Request:
{
  filename: string,
  mimeType: string,
  size: number
}

Response:
{
  uploadUrl: string,
  minioKey: string,
  fileId: string
}
```

### POST /api/v1/files/confirm-upload

**วัตถุประสงค์**: ยืนยันการอัปโหลดสำเร็จและบันทึกข้อมูล metadata

```typescript
Request:
{
  fileId: string,
  minioKey: string
}

Response:
{
  success: boolean,
  file: FileObject
}
```

### DELETE /api/v1/files/:id

**วัตถุประสงค์**: ลบไฟล์จาก MinIO และฐานข้อมูล

```typescript
Response:
{
  success: boolean,
  message: string
}
```

### DELETE /api/v1/files/bulk

**วัตถุประสงค์**: ลบหลายไฟล์พร้อมกัน

```typescript
Request:
{
  fileIds: string[]
}

Response:
{
  success: boolean,
  deleted: number,
  failed: string[]
}
```

### GET /api/v1/files/:id/preview

**วัตถุประสงค์**: รับ URL สำหรับแสดงตัวอย่างไฟล์ที่รองรับ

```typescript
Response:
{
  previewUrl: string,
  supportsPreview: boolean,
  mimeType: string
}
```

## Endpoints การจัดการการแชร์

### POST /api/v1/shares

**วัตถุประสงค์**: สร้างลิงก์แชร์ที่มีการหมดอายุ

```typescript
Request:
{
  fileId: string,
  expiresIn: number // วินาที
}

Response:
{
  shareId: string,
  shareUrl: string,
  expiresAt: string,
  downloadUrl: string
}
```

### GET /api/v1/shares

**วัตถุประสงค์**: แสดงรายการการแชร์ที่ยังใช้งานได้

```typescript
Response:
{
  shares: {
    id: string,
    fileId: string,
    filename: string,
    shareUrl: string,
    expiresAt: string,
    createdAt: string,
    accessCount: number
  }[]
}
```

### DELETE /api/v1/shares/:id

**วัตถุประสงค์**: ยกเลิกการแชร์ที่ยังใช้งานได้

```typescript
Response:
{
  success: boolean,
  message: string
}
```

### GET /api/v1/shares/:id/download

**วัตถุประสงค์**: Endpoint สาธารณะสำหรับดาวน์โหลดไฟล์ที่แชร์

```typescript
Response: File stream หรือ redirect ไปยัง MinIO presigned URL
```

## Endpoints ผู้ดูแลระบบ

### GET /api/v1/admin/stats

**วัตถุประสงค์**: รับสถิติการใช้งานและพื้นที่จัดเก็บ

```typescript
Response:
{
  totalFiles: number,
  totalSize: number,
  storageUsed: string,
  filesByType: {
    mimeType: string,
    count: number,
    size: number
  }[],
  recentActivity: {
    action: 'upload' | 'delete' | 'share',
    filename: string,
    timestamp: string
  }[]
}
```

