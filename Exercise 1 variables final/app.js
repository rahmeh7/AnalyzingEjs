//Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

// Your Express app setup and routes here
const app = express()

//Set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
console.log('views', path.join(__dirname, 'views'))

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

//create a route for the home page
//GET route for the form
app.get('/', (req,res) => {
    //Render the form and pass in the current student data
    res.render('index')
})

//create a route for user to enter the numbers
app.post("/calculate", (req, res) => {
    const { num1, num2 } = req.body
    const sum = Number(num1) + Number(num2)
    const difference = Number(num1) - Number(num2)
    const product = Number(num1) * Number(num2)
    const quotient = Number(num1) / Number(num2)
    res.render("result" , { sum, difference, product, quotient })
})

// Start the server on the port 4000,
//Note that we are advertising the service on port no. 4000 and not 3000 this time
var port = 4000
//NOTE
//The quotes are replaced by back ticks ` next to key caps 1
app.listen( port, () => {
    console.log(`Server is running on port ${port}`)
})