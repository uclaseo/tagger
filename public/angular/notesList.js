angular.module('note')
.controller('notesListController', function() {
  this.list = [];
  this.text = 'hell,nkljlo';
  this.submit = function() {
    if (this.text) {
      this.list.push(this.text);
      this.text = '';
    }
  }
})

.directive('notesList', function() {
  return {
    scope: {

    },
    controller: 'notesListController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'angular/notesList.html'
  }
})




  // angular.module('submitExample', [])
  //   .controller('ExampleController', ['$scope', function($scope) {
  //     $scope.list = [];
  //     $scope.text = 'hello';
  //     $scope.submit = function() {
  //       if ($scope.text) {
  //         $scope.list.push(this.text);
  //         $scope.text = '';
  //       }
  //     };
  //   }]);