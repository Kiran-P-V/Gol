const express = require("express");
const router = express.Router();
const controller = require("../controller/adminController");
const multer = require("../configs/multer");

router
  .route("/uploadImage")
  .post(multer.upload.array("image", 1), controller.uploadImage);

module.exports = router;
