var express = require('express');
var router = express.Router();
const fs = require('fs');
const multer = require('multer')
const upload = multer({
  dest: 'public/images/uploads'
})

router.post('/uploadFile', upload.single("meme"), (req, res, next) => {
  const newPath = `public/images/uploads/${Date.now()}${req.file.originalname}`
  fs.rename(req.file.path, newPath, (error) => {
    if (error) throw error;
    // upload  File Path to DB
    res.json("File Uploaded")
  })
});

router.post('/uploadFiles', upload.array("meme", 2), (req, res, next) => {
  res.json(req.files);
});

module.exports = router;