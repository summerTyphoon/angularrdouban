/**
 * Created by 11070 on 2017/5/28.
 */
(function(angular){
    var app = angular.module('moviecat.httpService',[]);
    app.factory('myService',[function(){
        return {
            myJsonp : function (url, params, callback) {
                // 1. 参数拼接
                var paramsStr = '?';
                for(var key in params){
                    paramsStr += key + '=' + params[key] + '&';
                }
                url = url + paramsStr;

                // 2. 拼接callback
                var myCallback = 'myCallback' + Math.random().toString().substr(2);

                url = url + 'callback=' + myCallback;

                // 3. 把传入的回调函数绑定到window上
                // 因为绑定时是同一个名字，所以，后面会覆盖前面
                window[myCallback] = callback;

                var script = document.createElement('script');
                script.src = url;
                document.body.appendChild(script);
            }
        }
    }]);
})(angular);