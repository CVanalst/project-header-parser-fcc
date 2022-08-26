const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/api/whoami', (req,res) => {
    res.json({ipaddress:req.ip, language:req.headers["accept-language"],software:req.headers['user-agent']})
})

app.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})