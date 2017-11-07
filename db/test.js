require('babel-polyfill');

let Student = require('../model/Student');
let Course = require('../model/Course');
let Class = require('../model/Class');

let studentDB = require('./studentDB');
let courseDB = require('./courseDB');
let classDB = require('./classDB');


//查询所有
// courseDB.findAll().then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log("报错了 ！"+error);
// });

//id查询
// courseDB.findById(1001).then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log(error);
// })

//增加
// var course = new Course(null,'jquery',2);
// courseDB.save(course).then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log("报错了 ！"+error);
// });


//修改
var course = new Course(1003,'linux',2);
courseDB.update(course).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
})


//删除
// var ids = [11,12];
// studentDB.batchDelete(ids).then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log("报错了 ！"+error);
// })

// studentDB.query('男').then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log("报错了 ！"+error);
// })