/*
 server/server.js
 Devin T. Currie
*/

// Modules
var express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    methodOverride = require('method-override'),
    app = express(),
    port = process.env.PORT || 4030,    // Port
    server = require('http').createServer(app),
    path = require('path'),
    publicPath = path.join(__dirname, '../public');

// Configure Modules
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(publicPath));

// get public directory paths
app.use('/js', express.static(publicPath + '/js'));
app.use('/css', express.static(publicPath + '/css'));
app.use('/img', express.static(publicPath + '/img'));
app.use('/libs', express.static(publicPath + '/libs'));
app.use('/views', express.static(publicPath + '/views'));

server.listen(port);

app.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('/index.html', { root: publicPath });
});
