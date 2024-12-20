import express from "express";
import cors from "cors";
import morgan from "morgan";
import dbConnect from "./config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(morgan("dev"));

// parse json data
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server is live",
  });
});

// after connecting to database run the server
dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => console.log(e));
