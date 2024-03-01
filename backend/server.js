import express from "express";
import dotenv from "dotenv";

import "./passport/githubAuth.js";

import passport from "passport";
import session from "express-session";

import userRoute from "./routes/userRoute.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import authRoute from "./routes/authRoute.js";

import cors from "cors";
import connectDB from "./db/connectDB.js";

dotenv.config();
const app = express();

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
  console.log("Server running at port 5000.");
  connectDB();
});
