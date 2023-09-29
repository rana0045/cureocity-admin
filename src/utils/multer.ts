import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
   destination: "/public/upload",
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extname = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + extname);
   },
});

const upload = multer({ storage });

export default upload;
