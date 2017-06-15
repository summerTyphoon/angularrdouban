/**
 * Created by 11070 on 2017/5/28.
 */
(function(angular){
    var app = angular.module('moviecat.auto-active',[]);
    app.directive('autoActive',['$location',function($location){
        return{
            restrict:'ECMA',
            link:function(scope,element,attrs){
                // 在scope中监听location的变化
                scope.location = $location;
                scope.$watch('location.url()',function(newValue){
                    // 移除兄弟属性，设置自己 li标签
                    var ahref = element.children().attr('href');
                    //console.log(ahref)  // 为啥把其他li标签下的a标签的href也获取过来了？
                    if(ahref.indexOf(newValue)>-1){
                        //console.log(attrs)
                        element.parent().children().removeClass(attrs.autoActive);
                        element.addClass(attrs.autoActive);
                    }
                });
            }
        }
    }]);
})(angular);