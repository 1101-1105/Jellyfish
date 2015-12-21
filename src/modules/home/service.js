var xhr = require('../utils/xhr');

var timeline_count = 6;

module.exports = {
    getTimeline: function(callback){
        xhr.simpleCall({
            func:'timeline',
            query: {
              offset: 0,
              count: timeline_count
            }
        },function(res){
            callback(res.data);
        });
    },
    refreshTimeline: function(callback){
        xhr.simpleCall({
            func:'timeline',
            query: {
              offset: 0,
              count: timeline_count
            }
        },function(res){
            callback(res.data);
        });
    },
    infiniteTimeline: function(offset, callback){
        xhr.simpleCall({
            func:'timeline',
            query: {
              offset: offset,
              count: timeline_count
            }
        },function(res){
            callback(res.data);
        });
    }
};
