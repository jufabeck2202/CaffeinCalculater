angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, CoffeeService) {
  $scope.coffees=CoffeeService.all();
  var coffeeId=0;
  
  //get triggered when you hit the calculate button
  $scope.calculate =function calculate(){
   console.log(this.selectedCoffee);//der ausgewählte Kaffe
   console.log(this.formData.currency); //die währung 0=oz 1 =  ml:
   console.log(this.selectedCups);//selected cubs
   
   var selCoffee=String(this.selectedCoffee);
   
   for (var i = 0; i < $scope.coffees.length; i++) {
    var currentCoffe=String($scope.coffees[i].name);
    if(currentCoffe.trim()==selCoffee.trim()){
      console.log(i);
      coffeeId=i;
    }
  };
};//end of Calculate
  


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
