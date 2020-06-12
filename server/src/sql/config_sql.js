module.exports = {
    // 建表
    table_class: `create table if not exists class(
        id INT NOT NULL AUTO_INCREMENT,
        className VARCHAR(100) NOT NULL,
        PRIMARY KEY ( id )
    );`,
    // 插入新班级
    insertClass: `insert into class set className=?`,
    // 查询
    queryClass: `select * from class`
}