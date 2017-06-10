angular.module('note')
.controller('notesListController', function($http) {
  this.user = '';
  this.text = '';
  this.title = '';
  this.submit = function() {
    $http.post('/text', {
      user: this.user,
      title: this.title,
      text: this.text
    })
    .then(function successCallback(response) {
      console.log('POST SENT');
      console.log(response);

    }, function errorCallback(response) {

    });
  };
  this.getUser = '';
  this.allTexts = function() {
    $http.post('/user', {
      user: this.getUser
    })
    .then(function successCallback(response) {
      console.log('GET ALL USERS');
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