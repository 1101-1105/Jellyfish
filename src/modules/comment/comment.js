var appFunc = require('../utils/appFunc'),
    service = require('./service'),
    template = require('./comment.tpl.html'),
    popupTpl = require('./commentPopup.tpl.html');

var tweetId;

var commentModule = {
    init: function(query){
        tweetId = query.id;
        this.getComments();
    },
    getComments: function(){
        service.getComments(tweetId, function(response){
            if (response.err_code !== 0) return;
            var renderData = {
                comments: response.data,
                rtime: function(){
                    return appFunc.timeFormat(this.time);
                }
            };
            var output = appFunc.renderTpl(template, renderData);
            $$('#commentContent').html(output);
        });
    },
    commentPopup: function(params){
        var renderData = {
            comment: i18n.timeline.comment
        };

        if(params.name){
            renderData.title = i18n.comment.reply_comment;
            renderData.placeholder = i18n.comment.reply + '@' + params.name + ':';
        }else {
            renderData.title = i18n.timeline.comment;
            renderData.placeholder = i18n.comment.placeholder;
        }

        var output = appFunc.renderTpl(popupTpl, renderData);
        Jellyfish.popup(output);

        var bindings = [{
            element:'#commentBtn',
            event: 'click',
            handler: commentModule.sendComment
        }];

        appFunc.bindEvents(bindings);
    },
    sendComment: function(){
        var text = $$('#commentText').val();

        if(appFunc.getCharLength(text) < 4){
            Jellyfish.alert(i18n.index.err_text_too_short);
            return false;
        }

        Jellyfish.showPreloader(i18n.comment.commenting);

        var comment = {
            'id': tweetId,
            'text': text
        };

        service.sendComment(comment, function(response) { 
            if (response.err_code !== 0) {
                Jellyfish.alert(i18n.index.err_sending_failed);
            } else {
                Jellyfish.hidePreloader();
                Jellyfish.closeModal('.comment-popup');
                commentModule.getComments();
            }
        });

    },
    createActionSheet: function(){
        var replyName = $$(this).find('.comment-detail .name').html();
        var buttons1 = [
            {
                text: i18n.comment.reply_comment,
                bold: true,
                onClick:function(){
                    commentModule.commentPopup({name:replyName});
                }
            },
            {
                text: i18n.comment.copy_comment ,
                bold: true
            }
        ];
        var buttons2 = [
            {
                text: i18n.global.cancel,
                color: 'red'
            }
        ];

        var groups = [buttons1, buttons2];
        Jellyfish.actions(groups);
    }
};

module.exports = commentModule;
