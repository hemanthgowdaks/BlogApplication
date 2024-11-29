import express from "express"
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();
const PORT = process.env.PORT || 5000

app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);

app.listen(PORT, () => {
    connectDB()
    console.log(`app listening on port ${PORT}`)
  })