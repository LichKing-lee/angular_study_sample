/**
 * Created by ChangYong on 2016. 7. 2..
 */
var app = angular.module("MyApp01", []);
app.controller("mainCtrl", function($scope){
    $scope.function01 = function(param){
        return "hello first function param => [" + param + "]";
    };
    $scope.binding = "부모를 바꾸든 자식을 바꾸든 양쪽 다 바껴요 이것이 양방향 아니겠습니까";
}).directive("myDirective01", function(){
    return {
        replace : true,
        templateUrl : "template/template01.html",
        scope : {
            attr1 : "@name",
            attr2 : "@class",
            attr3 : "@custom",
            func1 : "&func",
            binding : "=test"
        },
        controller : function($scope){
            $scope.field = "field";
            $scope.func = function(){
                return "hello function";
            };
        },
        link : {
            pre : function(scope){
                scope.preTest = "hello link pre";
                scope.linkTest = "hello pre";
            },
            post : function(scope){
                scope.postTest = "hello link post";
                scope.linkTest = "hello post";
            }
        }
    }
});