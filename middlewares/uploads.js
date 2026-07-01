const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../services/cloudinary");

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: `BlogStack/${req.user._id}`,
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
    }),
});

const upload = multer({
    storage,
});

module.exports = upload;