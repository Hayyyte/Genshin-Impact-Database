required("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require("./dbconnect");

dbConnect();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});