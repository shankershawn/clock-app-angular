var firstModule = angular
        .module("firstModule", [])
            .controller("mainMethod", function($interval){
                console.log("Entering mainMethod!");
                var scope = this;
                scope.timeCall = function(){
                    console.log("inside timecall");
                    var date = new Date();
                    scope.hourOfDay = date.getHours();
                    scope.timeOfDay = date.toString();
                };
                $interval(scope.timeCall, 500);
            });