import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
async function main() {
  //! create users ---------------------------
  /* const resutl = await prisma.user.create({
    data: {
      name: "Ramzan",
      email: "ramzan@gmail.com",
    },
  });
  console.log(resutl); */

  // find all Users ---------------------
  /* const findUsers = await prisma.user.findMany({});
  console.log(findUsers); */

  //! findMany all Users ---------------------
  /* const findUsers = await prisma.user.findMany({
    where: {
      //id: 1,
      //name: "Azizul hakim",
       email: 'sorna34@gmail.com',
    },
  });
  console.log(findUsers); */ // [{data...}]

  //! findUnique Single User by Id ---------------------
  /* const findUsers = await prisma.user.findUnique({
    where: {
      id: 2,
    },
  });
  console.log(findUsers); */ // {data...}
  //! findUniqueOrThrow Single User by Id ---------------------
  /* const findUsers = await prisma.user.findUniqueOrThrow({
    where: {
      id: 7,
    },
  });
  console.log(findUsers); */ // return-> sinlge data and  Error throw

  //! updata user by Id ---------------------
  /* const updateUser = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Md Azizul Hakim",
      email: "azziul@gamil.com"
    },
  });
  console.log(updateUser); */ // { where: {id:1}, data: { naem: ""}}

  //* updateMany-all data update  --------------
  /*  const updateManyPhoto = await prisma.user.updateMany({
    where: {
      profilePhoto: null,
    },
    data: {
      profilePhoto: "https://i.ibb.co.com/VcPPrcbk/azizul-hakim.png",
    },
  }); */

  //* 3 gater then--data show--? 3-geter then data update-------------
  /* const updateManyPhoto = await prisma.user.updateManyAndReturn({
    where: {
      id: {
        gt: 3,
      },
    },
    data: {
      profilePhoto: "",
    },
  });
  console.log(updateManyPhoto); */ // [ id: 4 data show ]

  //! delete data ------------------------
  /* const deleteUser = await prisma.user.delete({
    where: {
      id: 4,
    },
  }); */ // delete id: 4-

  //* lt/gt-2-lt-1 --- deleteMany----------------
  const deleteUser = await prisma.user.deleteMany({
    where: {
      id: {
        gt: 2,
      },
    },
  }); // delete gt-2 geter-then-3... (more delete data)
  console.log(deleteUser);

  //* find all user---------------
  const findUsers = await prisma.user.findMany({});
  console.log(findUsers);
}
main();
