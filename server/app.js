const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const userController = require('./controller/controller');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var app = express();


// let express to use Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.urlencoded({ extended: true }))
app.listen(5000);

app.get('/users', (request, response) => {
  userController.fetchUsers(request, response);
});
app.get('/user/:id', (request, response) => {
  userController.fetchUserByID(request, response);
});
app.post('/login', (request, response) => {
  console.log("HI i am in app.js");
  console.log(request.body)
  userController.fetchLoggedInUser(request, response);
});
