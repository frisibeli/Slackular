angular.module('slackularApp')
	.controller('AuthCtrl', function(Auth, $state){
		var AuthCtrl = this;

		AuthCtrl.user = {
			email: '',
			password: ''
		};

		AuthCtrl.login = function(){
			Auth.$authWithPassword(AuthCtrl.user).then(function(auth){
				$state.go('home');
			}, function(error){
				AuthCtrl.error = error;
			});
		};
		AuthCtrl.register = function(){
			Auth.$createUser(AuthCtrl.user).then(function(user){
				AuthCtrl.login();
			}, function(error){
				AuthCtrl.error = error;
			});
		}
	});