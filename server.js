'use strict';

const express = require('express'); //npm install express
const progLang = require('./assets/prog-lan.json');

const app = express();

const PORT = 3000;

// localhost:3000/test
app.get('/test', (request, response) => {
response.send('alive!')
})

app.get('/',(request,response)=>{
response.status(200).send('home route');
})

// localhost:/petslist
let myPetsList = ['Odin', 'Arthas', 'Fudge'];
app.get('/petsList',(request,response)=>{
response.status(200).send(myPetsList)
})

// localhost:/prog-lan
app.get('/prog-lan', (req, res) => {
class ProgLanInfo {
constructor(title, dateCreated, description, imageUrl) {
this.title = title;
this.dateCreated = dateCreated;
this.description = description;
this.imageUrl = imageUrl;
}
}

try {
const myProgLan = progLang.map(lang => new ProgLanInfo(lang.title, lang.dateCreated, lang.description, lang.imageUrl));
res.status(200).send(myProgLan);
} catch (error) {
res.status(500).send(error)
}
});

app.listen(PORT,()=>{
console.log(`Listening on PORT ${PORT}`);
})