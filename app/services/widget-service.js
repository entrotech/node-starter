const { pool } = require("./postgres-pool");

const selectAll = () => {
  let sql = `
    select w.id, w.dateCreated, w.name
    from widget w
    order by w.name, w.dateCreated
  `;
  sql = `select * from public.widget`;
  return pool.query(sql).then(res => {
    // const widgets = [];
    // res.rows.forEach(row => {
    //   widgets.push({
    //     id: row.id,
    //     name: row.name,
    //     dateCreated: row.dateCreated
    //   });
    // });
    return res.rows;
  });
};

const selectById = id => {
  const sql = `select * from widgets where id = ${id}`;
  return pool.query(sql).then(res => {
    return res.rows[0];
  });
};

const insert = model => {
  const { name } = model;
  const sql = `insert into widget (name) values ('${name}') returning id`;
  return pool.query(sql).then(res => {
    return res.rows[0];
  });
};

const update = model => {
  const { id, name } = model;
  const sql = `update widget
               set name = '${name}'
                where id = ${id}`;
  return pool.query(sql).then(res => {
    return res;
  });
};

const remove = id => {
  const sql = `delete from widget where id = ${id}`;
  return pool.query(sql).then(res => {
    return res;
  });
};

module.exports = {
  selectAll,
  selectById,
  insert,
  update,
  remove
};
