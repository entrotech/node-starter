const organizationService = require("../services/organization-service");

const getAll = (req, res) => {
  organizationService
    .getAll()
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      res.status("404").json({ error: err.toString() });
    });
};

module.exports = {
  getAll
};
