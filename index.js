// section 1
const express = require('express');
const app = express();
const bodyParser = require("body-parser"); 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const users = [{
    firstName: 'David',
    lastName: 'Jonhnson',
    email: 'david@gmail.com'
}, {
    firstName: 'Renn',
    lastName: 'Mead',
    email: 'renn@gmail.com'
}];

// section 2
app.get('/', (req, res) => { 
 res.send("<h1>Welcome to the world of Express!</h1>");
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    users.push(req.body);
    res.send(users);
});


// section 3
app.listen(3000, (req, res) => { 
 console.log('Server started on port 3000');
});