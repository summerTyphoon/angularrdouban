(function (angular) {
    var app = angular.module('moviecat.movie_list', []);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page?', {
            templateUrl: '../movie_list/view.html',
            controller: 'movie_listCtrl'
        })
    }]);

    app.controller('movie_listCtrl', ['$scope', '$http', 'myService', '$routeParams','$route',
        function ($scope, $http, myService, $routeParams,$route) {

            var page = $routeParams.page;
            page = (page-0)||1;
            $scope.count = 10;
            $scope.page = page;
            $scope.isLoading = true;
            myService.myJsonp('http://api.douban.com/v2/movie/' + $routeParams.category,
                //myService.myJsonp('http://api.douban.com/v2/movie/coming_soon',
                {start: ($scope.page-1)*$scope.count, count: $scope.count, q:$routeParams.q},
                function (result) {
                    $scope.list = result;
                    $scope.total = result.total;
                    $scope.totalPage = Math.ceil(result.total/$scope.count);
                    $scope.isLoading = false;
                    $scope.$apply();
                });

            $scope.goPage = function(newPage){
                if(newPage<1||newPage>$scope.totalPage){
                    return;
                }
                $scope.page = newPage;
                // 修改路由的page
                $route.updateParams({
                    page:newPage
                });

            }
        }]);

})(angular);