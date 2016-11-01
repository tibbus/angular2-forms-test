"use strict"

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/dist', express.static(__dirname + '/dist'));
app.use('/style', express.static(__dirname + '/style'));
app.use('/assets', express.static(__dirname + '/assets'));
// used for ts maps
app.use('/src', express.static(__dirname + '/src'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/systemjs.config.js', express.static(__dirname + '/systemjs.config.js'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});
