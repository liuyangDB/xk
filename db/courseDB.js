let pool = require('./pool');

module.exports = {
    findAll(){
      let sql = "select * from xk_course";
      return pool.execute(sql);
    },
    findById(id){
      let sql = "select * from xk_course where id = "+id;
      return pool.execute(sql);
    },
    query(keys){
      let sql = "select * from xk_course where name like '%"
        +keys+"%'";
      return pool.execute(sql);
    },
    batchDelete(ids){
      let sql = "delete from xk_course where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(course){
      let sql = "insert into xk_course values(null,'"
        +course.name+"','"
        +course.credit+"')";
      return pool.execute(sql);
    },
    update(course){
      let sql = "update xk_course set name='"
        +course.name+"',credit='"
        +course.credit+"' where id="
        +course.id;
      console.log(sql);
      return pool.execute(sql);
    }
}
