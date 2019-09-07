var express = require('express');
var router = express.Router();
var request = require('request');

var game_list = [];

router.get('/', function (req, res, next) {
    request.get(
        'https://sheets.googleapis.com/v4/spreadsheets/1C4j0cLSdWj1dg2s4f9zghsIhA1xRsKiL3RbEU6SmCkE/values/Sheet1?key=AIzaSyDNSRqcUqNjQZHuzR8FZGvvve-2KJODD5o',
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                game_list = JSON.parse(body).values;
                game_list.splice(0, 1);
                console.log(game_list);
                res.render('gamelist', {
                    'gamelist': game_list,
                })
            } else {
                res.render('gamelist', {'error': error})
            }
        }
    );
});

module.exports = router;