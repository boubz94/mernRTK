const express = require("express");
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/foo", require("./routes/fooRoutes"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`listening on port  ${port}`);
});
