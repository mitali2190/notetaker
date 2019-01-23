var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "	ohw0od4jauxiqivq",
    password: "zh7rj4zbyqj8fkvu",
    database: "fg8a345cajlmlbcp"
  });
}

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

module.exports = connection;