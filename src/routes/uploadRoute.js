import { Router } from "express";
import multer from "multer";
const uploaderRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

uploaderRouter.post("/", upload.single("image"), (req, res) => {
  const imageUrl = `http://localhost:3456/${req.file.path}`;
  res.json({ imageUrl });
});

export default uploaderRouter;
