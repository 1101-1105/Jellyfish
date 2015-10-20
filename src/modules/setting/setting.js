require('./setting.less');

var appFunc = require('../utils/appFunc'),
    template = require('./setting.tpl.html');

var settingView = {
    init: function(){
        settingView.bindEvents();
    },
    renderSetting: function(){
        if($$('#settingView .page-content')[0]) return;

        Jellyfish.showIndicator();

        var renderData = {
            avatarUrl: "http://i13.tietuku.com/2363054492b63eac.jpg",
            nickName: 'Jelly',
            points: '100'
        };

        var output = appFunc.renderTpl(template, renderData);
        $$('#settingView .page[data-page="setting"]').html(output);

        Jellyfish.hideIndicator();
    },
    logOut: function(){
        Jellyfish.confirm(i18n.setting.confirm_logout,function(){
            //mainView.router.loadPage('page/login.html');
            //Jellyfish.showTab('#ourView');
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
