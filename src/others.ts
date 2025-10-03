import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  //! crateMany({data:[{},{}]})-----------------
  /*  const userData = await prisma.user.createMany({
    data: [
      { name: "Sorna", email: "sorna@gmail.com" },
      { name: "Sorna1", email: "sorna1@gmail.com" },
      { name: "Sorna2", email: "sorna2@gmail.com" },
    ],
  }); */

  //! findMany({orderBy:{id,name,email: "asc" // "desc"}})
  /* const userData = await prisma.user.findMany({
    orderBy: {
      //id: "asc", //1,2,3,4,5
      id: "desc", // 5,4,3,2,1
    },
  });
  console.log(userData); */

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
}

main();
