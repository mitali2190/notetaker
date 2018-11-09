var router = require("express").Router();
var connection = require("../db/connection");

router.get("/api/view", function(req, res) {
  connection.query("SELECT * FROM note", function(err, dbTables) {
    res.json(dbTables);
  });
});
router.post("/api/view/this", function(req, res) {
  console.log(req.body);
  connection.query("SELECT * FROM note WHERE name = ?",req.body.name, function(err, data) {
    if(err) throw err
    res.json(data);
  });
});



router.post("/api/save", function(req, res){
  connection.query("INSERT INTO note SET ?", req.body, function(err, result){
    if (err) throw err;

      res.json(result);
      console.log("successful")
  })
})
router.delete("/api/del", function(req, res){
  console.log(req.body);
  connection.query('DELETE FROM note WHERE id = ?',req.body.noteid, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
})
module.exports = router;