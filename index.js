const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/students', (req, res) => {
    if (req.query.search) {

    } else {
        res.send(students)
    }
});

app.get('/students/:studentId', () => { });

app.get('/grades/:studentId', () => { });

app.post('/grades', () => { });

app.post('/register', () => { });

app.listen(port, () => console.log('server up'));
