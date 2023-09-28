"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

app.get('/user/:id',(req,res)=>{

   try {
    const id = req.params.id
    if(isNaN(id)){
        throw new Error('ID is not a number')
    }
    else{
        res.send({id:req.params.id})
    }
   } catch (err) {
    res.send({
        error:true,
        message:err.message
    })
   }
    
})

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));