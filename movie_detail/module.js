/**
 * Created by 11070 on 2017/5/28.
 */
(function(angular){
    var app = angular.module('moviecat.details',[]);
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/movie/details/:id',{
            templateUrl:'../movie_detail/view.html',
            controller:'movie_detailCtrl'
        })
    }]);

    app.controller('movie_detailCtrl',['$scope','$routeParams','myService',
        function($scope,$routeParams,myService){
            console.log('...电影详情',$routeParams);
            $scope.isLoading = true;
            myService.myJsonp('http://api.douban.com/v2/movie/subject/' + $routeParams.id,{},function(result){
                $scope.details = result;
                console.log(result)
                $scope.isLoading = false;
                $scope.$apply();
            });
    }]);
})(angular);


//定义电影详情的模块
//(function(angular){
//    var app = angular.module('moviecat.details', []);
//
//    //路由的配置
//    app.config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/movie/details/:id',{
//            templateUrl:'../movie_detail/view.html',
//            controller: 'detaiController' // ng-controller
//        });
//    }]);
//    app.controller('detaiController', ['$scope', '$routeParams','myService',
//        function($scope, $routeParams, myService){
//            console.log('---电影详情到了：', $routeParams);
//
//            //在电影详情的controller函数，再请求jsonp，获得每个电影的详情的数据
//            //url : /v2/movie/subject/:id
//            myService.myJsonp('http://api.douban.com/v2/movie/subject/'+ $routeParams.id,
//                {}, function(result){
//                    console.log('----电影的数据拿到了:', result);
//                    $scope.details = result;
//                    $scope.$apply();//触发view数据脏检查
//                } )
//        }])
//})(angular)