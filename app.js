const express = require('express');
const path = require('path');

const routes = require('./routes');
const app = express();
app.set('view engine' , 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/' , routes.home);


 //set up port
 app.listen(3000, () => console.log('app listening on port 3000'));