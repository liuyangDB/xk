let express = require('express');
let courseDB = require('../db/courseDB');
let Course = require('../model/Course');

let courseRoute = express.Router();
courseRoute.get('/findAll',(req,resp)=>{
    courseDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
courseRoute.get('/findById',(req,resp)=>{
    courseDB.findById(req.query.id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
courseRoute.get('/query/:keys',(req,resp)=>{
    courseDB.query(req.params.keys).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
courseRoute.post('/batchDelete',(req,resp)=>{
    let ids =[];
    ids = ids.concat(req.body['ids[]']);
    courseDB.batchDelete(ids).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
courseRoute.post('/save',(req,resp)=>{
    let newCourse = new Course();
    Object.assign(newCourse,req.body);
    courseDB.save(newCourse).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
courseRoute.post('/update',(req,resp)=>{
    let newCourse =new Course();
    Object.assign(newCourse,req.body);
    courseDB.update(newCourse).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
})
module.exports = courseRoute;