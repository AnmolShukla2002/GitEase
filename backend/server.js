import express from "express";
import dotenv from "dotenv";
import path from "path";

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
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

console.log("dirname", __dirname);

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
  connectDB();
});
