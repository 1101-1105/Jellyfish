// require('./login.less');

var appFunc = require('../utils/appFunc');

var loginModule = {
    init: function() {
        console.log('login.init()');
        appFunc.hideToolbar();
    },
    fuck: function() {

    },
    login: function() {

    },
    bindEvents: function() {
        var bindings = [{
            element: '',
            selector: '',
            event: 'click',
            handler: loginModule.login
        }];

        // appFunc.bindEvents(bindings);
    }
};

module.exports = loginModule;
