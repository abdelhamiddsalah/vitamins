const cloudinary = require('cloudinary').v2;

// إعداد Cloudinary
cloudinary.config({
    cloud_name: 'ddmd64tdp', // استبدل بـ Cloud Name الخاص بك
    api_key: '432168418163768',       // استبدل بـ API Key الخاص بك
    api_secret: 'a_mnMUgh9VMBcgYcsjB-Qo-PLNk'  // استبدل بـ API Secret الخاص بك
});

module.exports = cloudinary;
