// your code here
angular.module('note' , [])
.controller('appController', function() {

})
.directive('app', function() {
  return {
    scope: {

    },
    controller: 'appController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'angular/app.html'
  }
})

