var express = require('express');
var router = express.Router();
var request = require('request');

var item_list = [];

router.get('/', function (req, res, next) {
    request.get(
        'https://sheets.googleapis.com/v4/spreadsheets/1KVPYcZ15OwSk0raE7AG636FZki8NcpVm3mYsClQnU5w/values/Sheet1?key=AIzaSyDNSRqcUqNjQZHuzR8FZGvvve-2KJODD5o',
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                item_list = JSON.parse(body).values;
                item_list.splice(0, 1);
                console.log(item_list);
                res.render('pointsmall', {
                    'itemlist': item_list,
                })
            } else {
                res.render('pointsmall', {'error': error})
            }
        }
    );
});

module.exports = router;