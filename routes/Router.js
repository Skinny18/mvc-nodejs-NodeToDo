const express = require("express");
const router = express()
const tasksRoutes = require('./taskRoutes')

router.use("/tasks", tasksRoutes)

//teste route
router.get("/", tasksRoutes)

module.exports = router;