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
    getAllFriends()
})




				
					
				
		
