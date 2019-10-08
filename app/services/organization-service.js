const { pool } = require("./postgres-pool");

const getAll = () => {
  const sql = `
      select *
      from organizations
    `;
  return pool.query(sql).then(res => {
    const organizations = [];
    res.rows.forEach(row => {
      organizations.push(row);
    });
    return organizations;
  });
};

module.exports = {
  getAll
};
