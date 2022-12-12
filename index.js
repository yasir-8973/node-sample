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
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/get', Text.Text);

app.listen(port, () =>{
    console.log("app running in port "+port);
});

const db = require("./app/models");
db.mongoose
.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

require("./app/routes/turorial.routes")(app);