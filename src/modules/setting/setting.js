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
            avatarUrl: 'https://avatars1.githubusercontent.com/u/5567116',
            nickName: 'Xicky',
            points: '100'
        };

        var output = appFunc.renderTpl(template, renderData);
        $$('#settingView .page[data-page="setting"]').html(output);

        Jellyfish.hideIndicator();
    },
    logOut: function(){
        Jellyfish.confirm(i18n.setting.confirm_logout,function(){
            // var homeF7View = Jellyfish.addView('#loginView', {
            //     dynamicNavbar: false
            // });
            // homeF7View.router.loadPage('page/login.html');
            // settingView.router.loadPage('page/login.html');
            //Jellyfish.showTab('#ourView');
            // window.location('page/login.html');
            function eventFire(el, etype){
              if (el.fireEvent) {
                el.fireEvent('on' + etype);
              } else {
                var evObj = document.createEvent('Events');
                evObj.initEvent(etype, true, false);
                el.dispatchEvent(evObj);
              }
            }
            eventFire(document.getElementById('loginJump'), 'click');
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
