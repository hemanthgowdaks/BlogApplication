import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { Webhook } from "svix";

export const clerkWebhook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!");
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return res.status(400).json({
      message: "Webhook verification failed!",
    });
  }

  console.log("Webhook event received:", evt.type);

  if (evt.type === "user.created") {
    try {
      const newUser = new User({
        clerkUserId: evt.data.id,
        username:
          evt.data.username || evt.data.email_addresses[0].email_address,
        email: evt.data.email_addresses[0].email_address,
        img: evt.data.profile_img_url,
      });
      await newUser.save();
      console.log("User created successfully");
      return res.status(200).json({
        message: "User created successfully",
      });
    } catch (error) {
      console.error("Error saving new user:", error);
      return res.status(500).json({
        message: "Failed to save user",
      });
    }
  }

  if (evt.type === "user.deleted") {
    const deletedUser = await User.findOneAndDelete({
      clerkUserId: evt.data.id,
    });

    if (!deletedUser) {
      console.error(`No user found with clerkUserId: ${evt.data.id}`);
      return res.status(404).json({ message: "User not found" });
    }

    await Post.deleteMany({ user: deletedUser._id });
    await Comment.deleteMany({ user: deletedUser._id });

    console.log(`Deleted user and associated posts/comments: ${deletedUser._id}`);
    return res.status(200).json({
      message: "User and associated data deleted successfully",
    });
  }

  return res.status(400).json({
    message: "Unhandled event type",
  });
};
