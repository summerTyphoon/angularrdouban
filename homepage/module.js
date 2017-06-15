/**
 * Created by 11070 on 2017/5/27.
 */
(function(angular){
    // 首页模块
    var app = angular.module('moviecat.homepage',[]);

    // 首页路由
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'../homepage/view.html',
            controller:'homepageCtrl'
        }).otherwise({
            redirectTo:'/home_page'
        });
    }]);

    // 创建模块
    app.controller('homepageCtrl',['$scope',function($scope){
        console.log('主页加载啦啦啦...')
    }]);
})(angular);