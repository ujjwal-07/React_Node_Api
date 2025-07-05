import express from "express";
import userRouter from "./routers/user.route.js";
const app = express();
const Port = process.env.PORT || 5000;
import cors from "cors";


app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);


app.listen(Port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${Port}`);
});
