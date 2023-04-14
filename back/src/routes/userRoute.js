const { Router } = require("express");
const { getUsersDb } = require("../controllers/userController");
const { User } = require("../db");

const router = Router();

router.get("/users", async (req, res) => {
  let allUsers = await getUsersDb();
  try {
    res.status(200).send(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
});

router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  let allUser = await getUsersDb();
  try {
    if (id) {
      const userId = await allUser.filter((el) => el.id == id);
      userId.length
        ? res.status(200).send(userId)
        : res.status(500).json({ message: "Error al obtener usuario por ID" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/users", async (req, res) => {
  let { name, lastName, email, isAdmin, password, phone } = req.body;
  try {
    let createUser = await User.create({
      name,
      lastName,
      email,
      isAdmin,
      password,
      phone,
    });
    res.status(201).send(createUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear usuario" });
  }
});

module.exports = router;
