var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();

var mongoUrl = 'mongodb://localhost:27017/spm';
var playlistsCollection;

app.use('/', express.static(path.join(__dirname, 'dist/')));

var server = app.listen(9000, function () {
    console.log('Server started: http://localhost:%s/', server.address().port);
});

/**
 * GET /playlists
 */
app.get('/playlists', function (req, res) {
    playlistsCollection.find().toArray(function(err, docs) {
        if (err) {
            return res.status(500).send(err);
        }

        res.send("No error!");
    });
});

MongoClient.connect(mongoUrl, function(err, db) {
    playlistsCollection = db.collection('playlists');
});