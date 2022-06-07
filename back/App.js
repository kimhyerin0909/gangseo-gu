var express = require('express');
var app = express();
var port = app.listen(process.env.PORT || 5050);

app.get('/', (req, res) => {
    res.send("<h1>Express Server Start</h1>");
})

app.listen(port, () => {
    console.log("Server Start");
})