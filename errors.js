"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *

app.get('/user/:id',(req,res)=>{

   try {
    const id = req.params.id
    if(isNaN(id)){
        throw new Error(`ID is not a number, ID : ${id}`)
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

//?  Error throw
/* ------------------------------------------------------- *

app.get('/user/:id',(req,res)=>{

    try {
     const id = req.params.id
     if(isNaN(id)){
         throw new Error(`ID is not a number, ID : ${id}`)
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

//?* Error Handle hata yakalama için kodlamanın en sonuna yazılır.
//? Error Handle 4 adet parametre alır.
/* ------------------------------------------------------- */

app.get('/user/:id', (req, res) => {
    const id = req.params.id ?? 0
    if (isNaN(id)) {
        res.statusCode = 402
        throw new Error('ID is Not A Number', { cause: 'params.id='+id })
    } else {
        res.send({ 
            error: false, 
            id: id
        })
    }
})


//? error handle olmasaydı hatalar html formatında ekranda görünecekti ve anlaşılması zor olacaktı.
const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ?? 500

    console.log('errorHandler runned')

    res.status(statusCode).send({ 
        error: true, // special data
        message: err.message, // Error string Message
        cause: err.cause, // Error optional cause
        // stack: err.stack // Error Details.
    })
}
//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler)
 
 /* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));