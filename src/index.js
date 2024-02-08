import express from "express";
import uploaderRouter from "./routes/uploadRoute";
const app = express();
const port = 3456;

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/upload", uploaderRouter);

app.listen(port, () => console.log(`[server] is running on port : ${port}`));
