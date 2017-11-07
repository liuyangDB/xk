let pool = require('./pool');
module.exports = {
  findAll(){
    let sql = "select * from xk_student";
    return pool.execute(sql);
  },
  findById(id){
    let sql = "select * from xk_student where id ="+id;
    return pool.execute(sql);
  },
  query(keys){
    let sql = "select * from xk_student where name like '%"
      +keys+"%' or gender like '%"
      +keys+"%'";
    return pool.execute(sql);
  },
  batchDelete(ids){
    let sql = "delete from xk_student where id in ("+ids.join()+")";
    return pool.execute(sql);    
  },
  save(student){
    let sql = "insert into xk_student values(null,'"
      +student.name+"','"
      +student.gender+"','"
      +student.birth+"',"
      +student.class_id+")";
    return pool.execute(sql);
  },
  update(student){
    let sql = "update xk_student set name='"
      +student.name+"',gender='"
      +student.gender+"',birth='"
      +student.birth+"',class_id="
      +student.class_id+" where id="
      +student.id;
    console.log(sql);
    return pool.execute(sql);
  }
}