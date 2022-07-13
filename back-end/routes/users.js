var express = require('express');
const db = require('./db');
var router = express.Router();

/* GET users listing. */
router.get("/city", async (req, res) => {
  db.query("SELECT * from city", async (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      return res.json({
        status: true,
        result,
      });
    }
  });
});

// router.get("/city", async (req, res) => {
//   console.log(req.params);
//   res.send({"123": 123});
// });

router.get("/impact", async (req, res) => {
  db.query("SELECT * from impact", async (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      return res.json({
        status: true,
        result,
      });
    }
  });
});

module.exports = router;
