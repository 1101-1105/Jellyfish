var jsonfile = require('jsonfile');
var path = require('path');
var file = path.join(__dirname, '../../data/contacts.json');

var contacts = {
    get: function(options) {
        var data = jsonfile.readFileSync(file);
        return data;
    },
    add: function(contact) {
        jsonfile.readFile(file, function(err, data){
            if (err) {
                console.log(err);
                return;
            }
            data = [contact].concat(data);
            jsonfile.writeFile(file, data, function(err) {
                console.log(err);
            });
        });
    }

};

module.exports = contacts;
