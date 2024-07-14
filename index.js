const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

const route = require("./src/routers");
const db = require("./src/config/db");

//su dung middleware cors
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,PATCH,POST,DELETE",
    credentials: true,
  })
);

//conect db
db.connect();

//chap nhan request dang json, urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route init luu y cai nay luon nam o duoi cung khi cac cau hinh load xong
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
