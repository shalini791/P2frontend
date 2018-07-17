/**
 * Angular JS Module
 */
var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/registration',{
		controller:'UserCtrl',
		templateUrl:'views/registrationform.html'
	})
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.when('/login',{
		controller:'UserCtrl',
		templateUrl:'views/login.html'
	})
	.when('/updateprofile',{
		controller:'UserCtrl',
		templateUrl:'views/updateprofile.html' //user object in updateprofile.html
	})
	.when('/addjob',{
		controller:'JobCtrl',
		templateUrl:'views/jobform.html' 
	})
	
	.when('/activejobs',{ //C to V,  $scope.activeJobs=[{},{}]
		controller:'JobCtrl',
		templateUrl:'views/activejobslist.html'
	})
	.when('/inactivejobs',{
		controller:'JobCtrl',
		templateUrl:'views/inactivejobslist.html'
	})
	
	.when('/addblog',{
		controller:'BlogCtrl',
		templateUrl:'views/blogform.html'
	})
	
	.when('/Postblog',{controller:'BlogCtrl',templateUrl:'views/Writeblog.html'})
	
	.when('/Getblogsapproved',{
		controller:'BlogCtrl',
		templateUrl:'views/Viewblogsapproved.html'
			})
		
		
	.when('/Getblogswaitingapproval',
		{controller:'BlogCtrl',templateUrl:'views/Viewblogswaitingapproval.html'})
	
		
		
     .when('/profilepic',{
		templateUrl:'views/uploadprofilepic.html'
	})
	
				
    .when('/suggestedusers',{
			controller:'FriendCtrl',
			templateUrl:'views/friendsuggestions.html'				
     })
     
     .when('/pendingrequests',{
			controller:'FriendCtrl',
			templateUrl:'views/pendingrequest.html'				
     })
		
     .when('/friends',{
			controller:'FriendCtrl',
			templateUrl:'views/friendslist.html'				
     })
     
      .when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatCtrl'
	})

		
     .otherwise({
		plateUrl:'views/home.html'
	})
})
app.run(function($rootScope,$cookieStore,UserService,$location){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('loggedInUser')
		
		$rootScope.logout=function(){
		UserService.logout().then(function(response){
			$rootScope.message="Loggedout successfully..."
				delete $rootScope.loggedInUser
				$cookieStore.remove('loggedInUser')
			$location.path('/login')
		},function(response){
			$rootScope.error=response.data //ErrorClazz object returned from middleware
			$location.path('/login')
		})
	}	
})


