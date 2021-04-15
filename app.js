//dependency
const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const productSales = require('./Routes/ProductRoute');
// const config = require('./config')
// const jwt = require('jsonwebtoken')
const DatabaseConnection = require('./models/database');
const bodyParser = require("body-parser")
//init
const app = express();
app.use(cors());

//setup
// app.use(express.json());
// app.use(cors());
// app.options('*', cors())
// app.use(helmet())

DatabaseConnection._connect()


var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
  };
  


  
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
//   mode: 'no-cors'

//middleware
// app.use('*', async function (req, resp, next) {
  
//         const token = req.headers.authorization
//         if (!token) {
//             return resp.status(200).send({ auth: false, message: 'No token provided' });
//         } else {
           
//                 return next()
           
//         }
    
// })

//routing
app.use('/product' , productSales)

//error handling 
app.use(function (err, req, resp, next) {
    if (err) {
        console.log(err)
    }
})

//boot
app.listen(3000, () => console.log('Listening at 3000'))