var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
//引入控制器文件
var {
  getTablelist,
  addtable,
  uptable,
  deletetable,
  searchtable,
} = require("../Controller/TableCon");

//相对于的路径访问相对于控制器的方法
router.get("/list", getTablelist);
router.post("/add", addtable);
router.post("/update/:id", uptable);
router.get("/delete/:id", deletetable);
router.get("/search/:title", searchtable);

module.exports = router;
