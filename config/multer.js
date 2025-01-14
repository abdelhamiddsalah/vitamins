const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig');

// إعداد تخزين الصور
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'images', // اسم المجلد الذي سيتم تخزين الصور فيه
        format: async (req, file) => 'jpg', // صيغة الصورة
        public_id: (req, file) => file.originalname.split('.')[0], // اسم الصورة
    },
});

// إعداد Multer
const upload = multer({ storage });

module.exports = upload;
