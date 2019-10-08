const router = require("express").Router();
const organizationController = require("../controllers/organization-controller");

router.get("/", organizationController.getAll);

module.exports = router;
