let pool = require('./pool');

module.exports = {
    findAll(){
        let sql ="select * from xk_class";
        return execute(sql);
    },
    findById(id){
        let sql = "select * from xk_class where id = "+id;
        return execute(sql);
    },
    query(keys){
        let sql = "select * from xk_class where name like "+name;
        return execute(sql);
    },
    batchDelete(ids){
        let sql = "delete from xk_class where id in ("
            +ids.join()+")";
        return execute(sql);
    },
    save(clazz){
        let sql = "insert into xk_class values(null,'"
            +clazz.name+"')";
        return execute(sql);
    },
    update(clazz){
        let sql = "update xk_class set name='"
        +clazz.name+"' where id="
        +clazz.id;
        return execute(sql);
    }
}