//day dung de khoi tao va nap cac router vao va dieu huong cac trang co ban nhu home, search, about vv...
const usersRouter = require("./users");

function route(app) {
  //cau hinh nhieu tuyen duong cho user
  app.use("/users", usersRouter);

  //path '/' thi luon nam o cuoi de uu tien meet qua cac path phia tren
  app.get("/", (req, res) => {
    res.send("day la trang chu");
  });
}
module.exports = route;
