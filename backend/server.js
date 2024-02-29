import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import cors from "cors";
import connectDB from "./db/connectDB.js";

dotenv.config();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/users", userRoute);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
  console.log("Server running at port 5000.");
  connectDB();
});
