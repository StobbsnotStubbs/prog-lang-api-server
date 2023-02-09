'use strict';

const { response } = require('express');
const express = require('express'); //npm install express

const app = express();

const PORT = 3000;

// localhost:3000/test
app.get('/test', (request, response) => {
  response.send('alive!')
})

app.get('/',(request,response)=>{
  response.status(200).send('home route');
})

app.listen(PORT,()=>{
  console.log(`Listening on PORT ${PORT}`);
})