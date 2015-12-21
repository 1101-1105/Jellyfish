var jsonfile = require('jsonfile');
var path = require('path');
var file = path.join(__dirname, '../../data/timeline.json');

var timeline = {
    get: function(options) {
        var data = jsonfile.readFileSync(file);
        data = data.splice(options.offset, options.count);
        return data;
    },
    add: function(tweet) {
        jsonfile.readFile(file, function(err, data){
            if (err) {
                console.log(err);
                return;
            }
            tweet.id = String(Number(data[0].id) + 1);
            data = [tweet].concat(data);
            jsonfile.writeFile(file, data, function(err) {
                if (err) console.log(err);
            });
        });
    }

};

module.exports = timeline;
