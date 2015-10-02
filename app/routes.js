/*
 app/routes.js
 Devin T. Currie
 */

// Models
var tests = require('./models/test-model'),
    path = require('path'),
    publicPath = path.join(__dirname, '../public');

module.exports = function (app) {
    /*
     Server Routes
     - API calls
     - Authentication
     */

    app.get('/api/tests', function (req, res) {
        /*
         GET: returns test-models as JSON:
         - name (string) - test-model name
         */
        tests.find(function (err, tests) {
            errorCheck(err, res);
            res.json(tests);
        });
    });

    /*
     Front-End Routes
     - Angular requests
     */

    app.get('/', function (req, res) {
        // GET: returns public/index.html file
        res.sendFile('index.html', {root: publicPath});
    });
};

function errorCheck(err, res) {
    if (err) res.send(err);
}