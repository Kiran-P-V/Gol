const banner = require("../models/banner");

const uploadImage = async (req, res) => {
  try {
    const imageFile = req.files;
    const Banner = new banner({
      image: imageFile.map((x) => x.filename),
    });
    const bannerData = await Banner.save();
    return res.status(200).json({ status: "upload success", bannerData });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ msg: "server error" });
  }
};

module.exports = {
  uploadImage,
};
