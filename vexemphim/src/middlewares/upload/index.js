const multer = require('multer');

const uploadAvatar = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/avatars');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}.${file.originalname.split('.').pop()}`);
    },
  });
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      const isValid = new RegExp('^.*.(jpg|JPG|jpeg|JPEG|PNG|png)$').test(file.originalname);

      if (isValid) {
        cb(null, true);
      } else {
        cb(new Error('invalid file'), false);
      }
    },
    limits: { fileSize: 10000000 },
  });

  return upload.single('avatar');
};
const uploadPoster = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/poster');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}.${file.originalname.split('.').pop()}`);
    },
  });
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      const isValid = new RegExp('^.*.(jpg|JPG|jpeg|JPEG|PNG|png)$').test(file.originalname);

      if (isValid) {
        cb(null, true);
      } else {
        cb(new Error('invalid file'), false);
      }
    },
    limits: { fileSize: 10000000 },
  });

  return upload.single('poster');
};

module.exports = {
  uploadAvatar,
  uploadPoster,
};
