const express = require('express');
const path = require('path')
const app = express();
const morgan = require('morgan');
const mysql      = require('mysql');
const myConnection = require('express-myconnection');

//
const userRoutes= require('./routes/users');
const { urlencoded } = require('body-parser');

//settings

app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


//middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host     : 'localhost',
    user     : 'Teleperformace',
    password : 'UsersTeleperformace',
    port: 3306,
    database : 'UsersTeleperformace',
    multipleStatements: true
},'single'));

app.use(express.urlencoded({extended: false}))

//routes

app.use('/',userRoutes);


// static files
app.use(express.static(path.join(__dirname,'public')))


app.listen(app.get('port'),()=>{
    console.log("Listen port 3000 ");
})