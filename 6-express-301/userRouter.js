const express = require('express');
let router = express.Router();

// function validateUser(req, res, next) {
//     res.locals.validated = true;
//     console.log("validated!");
//     next();
// }

// router.use(validateUser())

router.get("/", (req, res, next) => {
    res.json({
        msg: "User Router Works!"
    })
})

module.exports = router;