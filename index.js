require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8080;
const url_Frontend = process.env.URL_FRONTEND || "http://localhost:3000";

const route = require("./src/routers");
const db = require("./src/config/db");

//cau hinh chia se va hien thi cac file trong thu muc public
app.use("/public", express.static(path.join(__dirname, "public")));

//su dung middleware cors
app.use(
  cors({
    origin: [url_Frontend],
    methods: "GET,PATCH,PUT,POST,DELETE",
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
  console.log(`app listening on port ${port}`);
});
