const { User } = require("../models/user");

const router = require("express").Router();


//GET ALL USERS

router.get("/all", async (req, res) => {

  try {
    let dataUser = await User.find();
    res.status(200).send(dataUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.status(200).send(user);
  } else {
    res.status(404);
  }
});


module.exports = router;
