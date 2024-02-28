import express from "express";
import userRoute from "./routes/userRoute.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("Server running at port 5000.");
});
