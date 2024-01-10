const express = require("express");
const router = new express.Router();
const products = require("../models/productsSchema");
const User = require("../models/userSchema");
const authenicate = require("../middleware/authenticate");

router.get("/", (req, res) => {
  res.send("this is testing routes");
});

// get the products data

router.get("/getproducts", async (req, res) => {
  try {
    const producstdata = await products.find();
    console.log(producstdata + "data mila hain");
    res.status(201).json(producstdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

// register the data
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "filll the all details" });
    console.log("bhai nathi present badhi details");
  }

  try {
    const preuser = await User.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
    } else if (password !== cpassword) {
      res.status(422).json({ error: "Password do not match" });
    } else {
      const finaluser = new User({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });

      // yaha pe hasing krenge

      const storedata = await finaluser.save();
      console.log(storedata + "user successfully added");
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.log(
      "Error" + error.message
    );
    res.status(422).send(error);
  }
});

// login data
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill the details" });
  }

  try {
    const userlogin = await User.findOne({ email: email });
    console.log(userlogin);
    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      console.log(isMatch);

      if (!isMatch) {
        res.status(400).json({ error: "invalid crediential pass" });
      } else {
        const token = await userlogin.generatAuthtoken();
        console.log(token);

        res.cookie("eccomerce", token, {
          expires: new Date(Date.now() + 2589000),
          httpOnly: true,
        });
        res.status(201).json(userlogin);
      }
    } else {
      res.status(400).json({ error: "user not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: "invalid crediential pass" });
    console.log("Error" + error.message);
  }
});



// get user is login or not
router.get("/validuser", authenicate, async (req, res) => {
  try {
    const validuserone = await User.findOne({ _id: req.userID });
    console.log(validuserone + "user hain home k header main pr");
    res.status(201).json(validuserone);
  } catch (error) {
    console.log(error + "error for valid user");
  }
});

// for userlogout

router.get("/logout", authenicate, async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
      return curelem.token !== req.token;
    });

    res.clearCookie("eccomerce", { path: "/" });
    req.rootUser.save();
    res.status(201).json(req.rootUser.tokens);
    console.log("user logout");
  } catch (error) {
    console.log(error + "jwt provide then logout");
  }
});


module.exports = router;
