import express from "express";
import cors from "cors";
import hotelRouter from './routers/hotel.router';
import userRouter from './routers/user.router';
import rezervationRouter from './routers/rezervation.router';

import dotenv from 'dotenv';
dotenv.config();

import { dbConnect } from "./configs/database.config";
dbConnect();

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/", (req, res) => {
  res.send("Hoş Geldiniz Tatil Heyecanı!");
});

app.use("/api/hotels/", hotelRouter);
app.use("/api/users/", userRouter);
app.use("/api/rezervations/", rezervationRouter);

app.listen(process.env.PORT, () => {
  console.log("Backend çalışıyor http://localhost:" + process.env.PORT);
});