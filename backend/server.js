import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("Server running at port 5000.");
});
