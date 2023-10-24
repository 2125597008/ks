const connection = require("./db");

//查询
const getTable = (params) => {
  return new Promise((resolve, reject) => {
    const limit = (params.page - 1) * params.limit;
    connection.query(
      `select * from car LIMIT  ${limit} ,${params.limit}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//添加
const addtabledb = (params) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "insert into car(name,title,quantity,age,sex) values(?,?,?,?,?)",
      [params.name, params.title, params.quantity, params.age, params.sex],
      (err, data) => {
        //如果err为null则成功
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//改
const uptabledb = (id, param) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "update car set name = ? ,title = ? , quantity = ? ,age = ? , sex = ? where id = ?",
      [param.name, param.title, param.quantity, param.age, param.sex, id],
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//删除
const delettabledb = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`delete from car where id = ?`, [id], (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

//搜索
const searchtabledb = (param) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from car where title = ?",
      [param],
      (err, data) => {
        console.log(data);
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//导出方法，在需要使用到的模块中导入
module.exports = {
  getTable,
  addtabledb,
  uptabledb,
  delettabledb,
  searchtabledb,
};
