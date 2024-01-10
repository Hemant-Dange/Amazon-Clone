require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");

const Products = require("./models/productSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 8005;

app.listen(port, () => {
  console.log(`Server is running on Port number: ${port}`);
});

DefaultData();
