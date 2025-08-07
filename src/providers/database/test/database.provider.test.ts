import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import {
  PrismaClient,
  Role,
  File,
  FileRolePermission,
  FileUploadStatus,
} from "../generated";
import type { Prisma } from "../generated";

describe("Database Provider Tests", () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("Role Model", () => {
    let testRole: Role;

    test("should create a role", async () => {
      testRole = await prisma.role.create({
        data: {
          name: "TestRole",
        },
      });

      expect(testRole.id).toBeDefined();
      expect(testRole.name).toBe("TestRole");
      expect(testRole.createdAt).toBeInstanceOf(Date);
      expect(testRole.updatedAt).toBeInstanceOf(Date);
    });

    test("should enforce unique role names", async () => {
      try {
        await prisma.role.create({
          data: {
            name: "TestRole",
          },
        });
        // If the above does not throw, fail the test
        expect(true).toBe(false);
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });

    test("should update role", async () => {
      const updatedRole = await prisma.role.update({
        where: { id: testRole.id },
        data: {
          name: "UpdatedTestRole",
        },
      });

      expect(updatedRole.name).toBe("UpdatedTestRole");
      expect(updatedRole.updatedAt.getTime()).toBeGreaterThan(
        testRole.updatedAt.getTime()
      );
    });

    test("should delete role", async () => {
      await prisma.role.delete({
        where: { id: testRole.id },
      });

      const deletedRole = await prisma.role.findUnique({
        where: { id: testRole.id },
      });

      expect(deletedRole).toBeNull();
    });
  });

  describe("File Model", () => {
    let testFile: Prisma.FileGetPayload<{ include: { permissions: true } }>;

    test("should create a file", async () => {
      testFile = await prisma.file.create({
        data: {
          filename: "test.txt",
          filetype: "text/plain",
          fileSize: BigInt(1024),
          minioKey: "test/test.txt",
          uploadStatus: "PENDING",
        },
        include: {
          permissions: true,
        },
      });

      expect(testFile.id).toBeDefined();
      expect(testFile.filename).toBe("test.txt");
      expect(testFile.fileSize.toString()).toBe("1024");
      expect(testFile.uploadStatus).toBe("PENDING");
    });

    test("should enforce unique minioKey", async () => {
      try {
        await prisma.file.create({
          data: {
            filename: "test2.txt",
            filetype: "text/plain",
            fileSize: BigInt(1024),
            minioKey: "test/test.txt", // Same minioKey
            uploadStatus: "PENDING",
          },
        });
        // If the above does not throw, fail the test
        expect(true).toBe(false);
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });

    test("should update file status", async () => {
      const updatedFile = await prisma.file.update({
        where: { id: testFile.id },
        data: {
          uploadStatus: "COMPLETED",
        },
      });

      expect(updatedFile.uploadStatus).toBe("COMPLETED");
      expect(updatedFile.updatedAt.getTime()).toBeGreaterThan(
        testFile.updatedAt.getTime()
      );
    });

    test("should delete file", async () => {
      await prisma.file.delete({
        where: { id: testFile.id },
      });

      const deletedFile = await prisma.file.findUnique({
        where: { id: testFile.id },
      });

      expect(deletedFile).toBeNull();
    });
  });

  describe("FileRolePermission Model", () => {
    let testRole: Role;
    let testFile: File;
    let testPermission: FileRolePermission;

    test("should create file and role with permission", async () => {
      // Create role
      testRole = await prisma.role.create({
        data: {
          name: "TestRoleForPermission", // Use a different name to avoid conflict
        },
      });

      // Create file with permission
      testFile = await prisma.file.create({
        data: {
          filename: "test.txt",
          filetype: "text/plain",
          fileSize: BigInt(1024),
          minioKey: "test/permission.txt",
          uploadStatus: "COMPLETED",
          permissions: {
            create: {
              roleName: testRole.name,
              grantedBy: "test-system",
            },
          },
        },
        include: {
          permissions: true,
        },
      });

      expect(testFile.permissions).toHaveLength(1);
      testPermission = testFile.permissions[0];
      expect(testPermission.roleName).toBe(testRole.name);
      expect(testPermission.fileId).toBe(testFile.id);
      expect(testPermission.grantedBy).toBe("test-system");
    });

    test("should enforce composite primary key", async () => {
      try {
        await prisma.fileRolePermission.create({
          data: {
            fileId: testFile.id,
            roleName: testRole.name,
            grantedBy: "test-system",
          },
        });
        // If the above does not throw, fail the test
        expect(true).toBe(false);
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });

    test("should cascade delete permissions when file is deleted", async () => {
      // Delete the file
      await prisma.file.delete({
        where: { id: testFile.id },
      });

      // Check if permission was cascade deleted
      const deletedPermission = await prisma.fileRolePermission.findFirst({
        where: {
          fileId: testFile.id,
          roleName: testRole.name,
        },
      });

      expect(deletedPermission).toBeNull();

      // Clean up role
      await prisma.role.delete({
        where: { id: testRole.id },
      });
    });
  });
});
