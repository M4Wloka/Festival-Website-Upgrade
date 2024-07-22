const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.static('public'));

app.get('/', (req, res) => {res.send('Hello World!');
    });

app.listen(PORT, () => {
    console.log('Server is on and can be accessed at http://localhost:5000');
});

