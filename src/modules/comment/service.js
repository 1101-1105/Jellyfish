var xhr = require('../utils/xhr');

module.exports = {
    getComments: function(tweetId, callback) {
        xhr.simpleCall({
            func: 'comments',
            query: {
                id: tweetId
            }
        }, function (res) {
            callback(res);
        });
    },
    sendComment: function(comment, callback) {
        xhr.simpleCall({
            func: 'comments',
            method: 'POST',
            query: {
                'id': comment.id,
                'text': comment.text
            }
        }, function(response) {
            callback(response);
        });
    }
};