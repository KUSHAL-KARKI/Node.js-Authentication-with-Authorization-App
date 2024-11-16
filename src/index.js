import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoute.js";

configDotenv();
const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})

// Set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to mongo db database
const dburi = process.env.DB_URI;
mongoose
  .connect(dburi)
  .then(()=>{console.log("connected to database")})
  .catch((err) => {
    console.log(err);
  });

  // routes
  app.use(authRoutes);