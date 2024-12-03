import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware,requireAuth } from '@clerk/express'
import cors from "cors"

app.use(cors(process.env.CLIENT_URL));

const app = express();
app.use(clerkMiddleware())
const PORT = process.env.PORT || 5000;
app.use("/webhooks", webhookRouter)
app.use(express.json());


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Somthing went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`app listening on port ${PORT}`);
});
