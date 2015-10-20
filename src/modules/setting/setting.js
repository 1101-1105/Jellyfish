require('./setting.less');

var appFunc = require('../utils/appFunc'),
    template = require('./setting.tpl.html');

var settingView = {
    init: function(){
        settingView.bindEvents();
    },
    renderSetting: function(){
        if($$('#settingView .page-content')[0]) return;

        hiApp.showIndicator();

        var renderData = {
            avatarUrl: 'https://d13yacurqjgara.cloudfront.net/users/216043/screenshots/2027675/jellyfish_logo.jpg',
            nickName: 'Jellyfish',
            points: '200'
        };

        var output = appFunc.renderTpl(template, renderData);
        $$('#settingView .page[data-page="setting"]').html(output);

        hiApp.hideIndicator();
    },
    logOut: function(){
        hiApp.confirm(i18n.setting.confirm_logout,function(){
            //mainView.router.loadPage('page/login.html');
            //hiApp.showTab('#ourView');
        });
    },
    bindEvents: function(){
        var bindings = [{
            element: '#settingView',
            event: 'show',
            handler: settingView.renderSetting
        },{
            element: '#settingView',
            selector: '.logout-button',
            event: 'click',
            handler: settingView.logOut
        },{
            element: '#settingView',
            selector: '.update-button',
            event: 'click',
            //handler: settingView.checkVersion
        }];
        appFunc.bindEvents(bindings);
    }
};

module.exports = settingView;