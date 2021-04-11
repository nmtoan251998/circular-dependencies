const express = require('express');

const {
    Logger,
    Writer,
} = require('./di');

const app = express();

app.set('HOST', 'http://localhost');
app.set('PORT', 10000);

Logger.setContext('App');

app.listen(app.get('PORT'), () => Logger.log(`App started on ${app.get('HOST')}:${app.get('PORT')}`));

app.get('/', (req, res) => {
    Writer.writeFile('abc');
    res.status(200).send('Hello world');
})