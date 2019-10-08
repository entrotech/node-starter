const router = require("express").Router();

const organizationRouter = require("./organization-router");
const widgetRouter = require("./widget-router");

module.exports = router;

router.use("/api/organizations", organizationRouter);
router.use("/api/widgets", widgetRouter);
