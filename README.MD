# 1 Write Schama -- done

# 2. npx prisma migrate dev -- done

# 3. npx prisma generate -- done

# 4. Write query

1. mkdir hello-prisma
   cd hello-prisma

2. npm init -y
   npm install prisma typescript tsx @types/node --save-dev

3. npx tsc --init

4. npx prisma

5. npx prisma init --db --output ../generated/prisma

6. .env file add database_url----------------------
   DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

7. npm install @prisma/client

8. npx prisma migrate dev --name init

   1. ? Enter a name for the new migration: » user_table
   2. Prev data delete ----> npx prisma migrate reset

9. npx prisma generate

10. Query--------------------------------------------
    ```js
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
    ```

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

```

## 10. Create a new file named index.ts and add the following code to it:

```js
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
function main() {
  console.log("first");
}
main();
```

## 10. Project run --->

--> npx tsx src/index.ts

### works module--------

1. create, createMany({data: [{},{}]})
2. findMany({}) --- array[] of object{}
3. findUnique - return single Object{}
4. findUniqueOrThrow-- single object{}-- error all
5. update, updataMany, updateMenyAndReturn --Object{}
6. delete, deleteMany --Object{}
7. orderBy: {id: "asc"/ "desc}
8. sort ---> findMany({where: {name: {contains: "S", contains: "insensitve // sensitive/insensitive }}})

# 7. orderBy: {id: "asc"/ "desc}

```js
const userData = await prisma.user.findMany({
  orderBy: {
    //id: "asc", //1,2,3,4,5
    //id: "desc", // 5,4,3,2,1
    //name: "asc", //1,2,3,4,5
    //name: "desc", // 5,4,3,2,1
    //email: "asc", //1,2,3,4,5
    //email: "desc", // 5,4,3,2,1
  },
});
```

# 8. sort ---> findMany({where: {name: {contains: "S", contains: " case insensitve // casesensitive/insensitive }}})

```js
//! sort ---> findMany()
const userData = await prisma.user.findMany({
  where: {
    name: {
      contains: "SO", // case sensitive
      mode: "insensitive", // case insensitive
    },
  },
  orderBy: {
    name: "asc",
  },
});
console.log(userData);
```

---
