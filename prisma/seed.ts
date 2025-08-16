import { PrismaClient, FileUploadStatus } from '../src/providers/database/generated'

const prisma = new PrismaClient()

async function main() {
  const boss = await prisma.role.upsert({
    where: {
      name: 'Boss'
    },
    update: {},
    create: {
      name: 'Boss',
    }
  })

  console.log('Created Boss role:', boss)

  // Create sample test file
  const testFile = await prisma.file.create({
    data: {
      filename: 'test-document.pdf',
      filetype: 'application/pdf',
      fileSize: BigInt(1024 * 1024), // 1MB
      minioKey: 'test/test-document.pdf',
      uploadStatus: FileUploadStatus.COMPLETED,
      permissions: {
        create: {
          roleName: boss.name,
          grantedBy: 'system-seed'
        }
      }
    }
  })

  console.log('Created test file:', {
    ...testFile,
    fileSize: testFile.fileSize.toString()
  })

  const permission = await prisma.fileRolePermission.findFirst({
    where: {
      fileId: testFile.id,
      roleName: boss.name
    }
  })

  console.log('Created file permission:', permission)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
