angular.module('note')
.controller('notesListController', function() {

})

.directive('noteList', function() {
  return {
    scope: {

    },
    controlller: 'noteListController',
    controllerAs: 'ctrl',
    bindToController: true
    //templateUrl: 'SOME TEMPLATE DIRECTORY'
  }
})