const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const Text = require('./react');
const cors = require("cors"); 

var corsOptions = {
    origin: "*"
};
  
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

app.post('/get', Text.Text);

app.post("/demo", (req,res) => {
  response = {  
    first_name:"yaseer",  
    last_name:"123456"  
  };
  res.send(response);
})

app.listen(port, () =>{
  console.log("app running in port "+port);
});