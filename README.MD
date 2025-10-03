# 1 Write Schama -- done

# 2. npx prisma migrate dev -- done

# 3. npx prisma generate -- done

# 4. Write query

---

1. mkdir hello-prisma
   cd hello-prisma

2. npm init -y
   npm install prisma typescript tsx @types/node --save-dev

3. npx tsc --init

4. npx prisma

5. npx prisma init --db --output ../generated/prisma

6. .env file add database_url----------------------
   DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

7. npx prisma migrate dev --name init
   **\* ? Enter a name for the new migration: » user_table
   \*\*** Prev data delete ----> npx prisma migrate reset

```
8. npm install @prisma/client
9. npx prisma generate


10. Query--------------------------------------------
    ``js
    model Post {
    id Int @id @default(autoincrement())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    title String @db.VarChar(255)
    content String?
    published Boolean @default(false)
    author User @relation(fields: [authorId], references: [id])
    authorId Int
    }

model Profile {
id Int @id @default(autoincrement())
bio String?
user User @relation(fields: [userId], references: [id])
userId Int @unique
}

model User {
id Int @id @default(autoincrement())
email String @unique
name String?
posts Post[]
profile Profile?
}

```

````

## 10. Create a new file named index.ts and add the following code to it:

```js
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
````
