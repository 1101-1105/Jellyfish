var appFunc = require('./appFunc'),
    networkStatus = require('../components/networkStatus');

module.exports = {

    search: function(code, array){
        for (var i=0;i< array.length; i++){
            if (array[i].code === code) {
                return array[i];
            }
        }
        return false;
    },

    getRequestURL: function(options){
        //var host = apiServerHost || window.location.host;
        //var port = options.port || window.location.port;
        var query = options.query || {};
        var func = options.func || '';

        // var apiServer = 'api/' + func + '.json' +
        var apiServer = 'http://10.141.249.176:3001/' + func +
            (appFunc.isEmpty(query) ? '' : '?');

        var name;
        for (name in query) {
            apiServer += name + '=' + query[name] + '&';
        }

        return apiServer.replace(/&$/gi, '');
    },

    simpleCall: function(options,callback){
        var that = this;

        options = options || {};
        options.data = options.data ? options.data : '';

        //If you access your server api ,please user `post` method.
        options.method = options.method || 'GET';
        //options.method = options.method || 'POST';

        if(appFunc.isPhonegap()){
            //Check network connection
            var network = networkStatus.checkConnection();
            if(network === 'NoNetwork'){

                Jellyfish.alert(i18n.error.no_network,function(){
                    Jellyfish.hideIndicator();
                    Jellyfish.hidePreloader();
                });

                return false;
            }
        }

        $$.ajax({
            url: that.getRequestURL(options) ,
            method: options.method,
            data: options.data,
            success:function(data){
                data = data ? JSON.parse(data) : '';

                var codes = [
                    {code:10000, message:'Your session is invalid, please login again',path:'/'},
                    {code:10001, message:'Unknown error,please login again',path:'tpl/login.html'},
                    {code:20001, message:'User name or password does not match',path:'/'}
                ];

                var codeLevel = that.search(data.err_code,codes);

                if(!codeLevel){
                    if(typeof(callback) === 'function') {
                        callback(data);
                    }
                }else{
                    Jellyfish.alert(codeLevel.message,function(){
                        Jellyfish.hideIndicator();
                        Jellyfish.hidePreloader();
                    });
                }
            }
        });

    }
};
