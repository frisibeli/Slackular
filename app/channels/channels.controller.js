angular.module('slackularApp')
	.controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
		var channelsCtrl = this;
		channelsCtrl.channels = channels;
		channelsCtrl.profile = profile;
		channelsCtrl.getDisplayName = Users.getDisplayName;
		channelsCtrl.getGravatar = Users.getGravatar;
		channelsCtrl.users = Users.all;
		Users.setOnline(profile.$id);
		channelsCtrl.logout = function(){
			channelsCtrl.profile.online = null;
			Auth.$unauth();
			$state.go('home');
		}
		channelsCtrl.newChannel = {
			name: ''
		};
		channelsCtrl.createChannel = function(){
			channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
				$state.go('channels.messages', {channelId:ref.key()});
			});
		};
	});