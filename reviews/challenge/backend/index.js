const express = require("express");
const app = express();
// const cors = require("cors");
const pool = require('./db');
//middleware
app.use(express.static('public'));
app.use(express.json()); //(lets you add req.body)

app.get("/profiles", async(req, res)=>{
  try {
   
    const profiles = await pool.query("SELECT * FROM profiles")
    res.json(profiles.rows)
  } catch (error) {
      console.error(error.message)    
  }
})

app.listen(5000, ()=>{
  console.log("server has started on port 5000");
  
})