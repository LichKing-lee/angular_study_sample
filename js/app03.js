/**
 * Created by ChangYong on 2016. 7. 2..
 */
var app = angular.module("MyApp02", []).
controller("mainCtrl", function($scope){

}).directive("myDirective01", function(){
    return {
        compile : function(){
            return function(scope, element){
                element.text("first test!");
            }
        },
        priority : 100
    }
}).directive("myDirective02", function(){
    return {
        link : function(scope, element){
            element.text("second test!");
        },
        priority : 10
    }
});