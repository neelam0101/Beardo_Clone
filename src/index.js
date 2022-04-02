const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const cors = require("cors");
app.use(cors());
//{origin:"http://127.0.0.1:5100"}
const homeController = require("../src/controllers/home.controller");
const combo_data_Controller = require("./controllers/combo_data.controller");
const beard_data_Controller = require("./controllers/beard_data.controller");
const face_data_Controller = require("./controllers/face_data.controller");
const hair_data_Controller = require("./controllers/hair_data.controller");
const body_data_Controller = require("./controllers/body_data.controller");
const fragrance_data_Controller = require("./controllers/fragrance_data.controller");
const beared_fashion_data_Controller = require("./controllers/beared_fashion_data.controller");
const trimmers_data_Controller = require("./controllers/trimmers_data.controller");
const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");
app.use(express.json());

app.use("/homes", homeController);
app.use("/combo_data_collections", combo_data_Controller);
app.use("/beard_data_collections", beard_data_Controller);
app.use("/face_data_collections", face_data_Controller);
app.use("/hair_data_collections", hair_data_Controller);
app.use("/body_data_collections", body_data_Controller);
app.use("/fragrance_data_collections", fragrance_data_Controller);
app.use("/beared_fashion_data_collections", beared_fashion_data_Controller);
app.use("/trimmers_data_collections", trimmers_data_Controller);
app.use("/users", userController);

app.post(
  "/register",
  body("firstname")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Field can not be empty")
    .isLength({ min: 2, max: 30 })
    .withMessage("First Name must be at least 2 characters"),

  body("lastName").custom((value) => {
    if (value && value.length < 2) {
      throw new Error("Last Name must be at least 2 characters");
    }
    return true;
  }),
  body("mobile")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Field can not be empty")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number must be of 10 digits"),

  body("email")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Field can not be empty ")
    .isEmail()
    .withMessage("Enter valid email"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .custom((value) => {
      const passw = /^[A-Za-z]\w{7,15}$/;
      if (!value.match(passw)) {
        throw new Error(
          "Your password must contain at least 7 characters, First uppercase letter, one number, and one underscore."
        );
      }
      return true;
    })
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        throw new Error("Password and confirm password should match");
      }
      return true;
    }),
  register
);

app.post(
  "/login",
  body("email")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Field can not be empty")
    .isEmail()
    .withMessage("enter valid email"),
  login
);

module.exports = app;
