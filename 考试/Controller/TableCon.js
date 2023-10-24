//CarController.js
const express = require("express");

//创建服务器
const app = express.Router();

const {
  getTable,
  addtabledb,
  uptabledb,
  delettabledb,
  searchtabledb,
} = require("../dataBase/table");
const getTablelist = (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.size || 5;
  getTable({ page, limit }).then((response) => {
    res.send(response);
  });
};

const addtable = (req, res, next) => {
  addtabledb(req.body).then((response) => {
    res.send(response);
  });
};

const uptable = (req, res, next) => {
  uptabledb(req.params.id, req.body).then((response) => {
    res.send(response);
  });
};

const deletetable = (req, res, next) => {
  delettabledb(req.params.id).then((response) => {
    res.send(response);
  });
};

const searchtable = (req, res, next) => {
  searchtabledb(req.params.title).then((response) => {
    res.send(response);
  });
};
module.exports = {
  getTablelist,
  addtable,
  uptable,
  deletetable,
  searchtable,
};
