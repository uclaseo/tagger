angular.module('note')
.controller('notesListController', function($http) {
  this.user = '';
  this.text = '';
  this.submit = function() {
    $http.post('/', {
      user: this.user,
      text: this.text
    })
    .then(function successCallback(response) {
      console.log('POST SENT');
      console.log(response);

    }, function errorCallback(response) {

    });
  };
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

// $http.post('url', data, config)
// .then(function successCallback(response) {

// }, function errorCallback(response) {

// }


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