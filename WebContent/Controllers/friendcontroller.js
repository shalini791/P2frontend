/**
 * FriendCtrl
 */
app.controller('FriendCtrl',function($scope,FriendService,$location,$rootScope){
	function getSuggestedUsers(){
		FriendService.getSuggestedUsers().then(function(response){
			$scope.suggestedUsers=response.data
				},function(response){
					$scope.error=response.data
					if (response.status==401)
						$location.path('/login')
					})
	}
	getSuggestedUsers()
	
    $scope.sendFriendRequest=function(toIdValue){
    	FriendService.sendFriendRequest(toIdValue).then(function(response){
    		alert("Friend request has been sent successfully..")
    		getSuggestedUsers()
    	},function(response){
    		$scope.error=response.data
			if(response.status==401)
				$location.path('/login')
    	})
	}
	
	 function getPendingRequests(){
	    	FriendService.getPendingRequests().then(function(response){
	    		$scope.PendingRequest=response.data
	    	},function(response){
	    		$scope.error=response.data
				if(response.status==401)
					$location.path('/login')
	    	})
	    }

	 getPendingRequests()
	    
	    $scope.updateStatus=function(friendRequest,updatedStatus){
	    	friendRequest.status=updatedStatus;
	    	console.log(friendRequest.id)	;
	    	console.log(friendRequest.status)	;
	    	
	    	FriendService.updateStatus(friendRequest).then(
	    			function(response){
	    				getPendingrequest()
	    			},function(response){
	    	    		$scope.error=response.data
	    				if(response.status==401)
	    					$location.path('/login')
	    			})
	   }
	
    function getAllFriends(){
      FriendService.getAllFriends().then(
      function(response){
    	  $scope.friends=response.data
      },function(response){
    	  $scope.error=response.data
			if(response.status==401)
				$location.path('/login')  
      
      })	
    }
   


$scope.unFriend=function(friend){
	console.log("In Friend controller Unfriend function")	;
	console.log(friend.id)	;
	    	FriendService.unFriend(friend).then(
	    			function(response){
	    				getAllFriends()
	    			},function(response){
	    	    		$scope.error=response.data
	    				if(response.status==401)
	    					$location.path('/login')
	    			})
	   }

				
					
				
getAllFriends()

})
