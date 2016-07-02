/**
 * Created by ChangYong on 2016. 7. 2..
 */
var app = angular.module("MyApp01", []);
app.controller("mainCtrl", function($scope){
    $scope.function01 = function(param){
        return "hello first function param => [" + param + "]";
    };
    $scope.binding = "yong";
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
            $scope.priority = "first test";
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
        },
        priority : 5
    }
}).directive("myDirective02", function(){
    return {
        templateUrl : "template/template02.html",
        scope : true,
        controller : function($scope){
            $scope.priority = "second test";
        },
        priority : 10
    }
});