var express = require('express');
var router = express.Router();

router.get(/\/(.*)/, function(req, res){
    res.send("User page for "+req.params[0]);
});

module.exports = router;
