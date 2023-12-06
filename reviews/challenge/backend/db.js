const Pool = require("pg").Pool;

const pool = new Pool({
  user: "marcobelahouane",
  host: "localhost",
  port: "5432",
  database: "reviews"
});

module.exports = pool;