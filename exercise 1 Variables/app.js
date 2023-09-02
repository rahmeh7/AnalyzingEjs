const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';

  res.render('results', {
    num1,
    num2,
    addition,
    subtraction,
    multiplication,
    division,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
