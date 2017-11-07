let express = require('express');
let studentDB = require('../db/studentDB');
let Student = require('../model/Student');

let studentRoute = express.Router();
//查询所有
studentRoute.get('/findAll',(req,resp)=>{
  studentDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
studentRoute.get('/findById',(req,resp)=>{
  studentDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
studentRoute.get('/query/:keys',(req,resp)=>{
  studentDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//录入
studentRoute.post('/save',(req,resp)=>{
  let student = new Student();
  Object.assign(student,req.body);
  studentDB.save(student).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
studentRoute.post("/update",(req,resp)=>{
  let student = new Student();
  Object.assign(student,req.body);
  studentDB.update(student).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
studentRoute.post('/batchDelete',(req,resp)=>{
  var ids = [];
  ids = ids.concat(req.body['ids[]']);
  //console.log(ids);
  studentDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = studentRoute;