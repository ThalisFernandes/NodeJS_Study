const express = require('express');
const routesUser = require('./Routes/routesUser');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
routesUser(app);
app.get('/',(req, res) => {
        return res.send('rodando')
});

app.listen(port, ()=> console.log('Rodando'));