/*
 app/models/test-model.js
 Devin T. Currie
 */

// Modules
var mongoose = require('mongoose');

module.exports = mongoose.model('Test', {
    name: {type: String, default: 'tester'}
});