/**
 * FriendService
 */
app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.getSuggestedUsers=function(){
		return $http.get("http://localhost:8082/Project2Middleware/suggestedusers")
	}
	
	friendService.sendFriendRequest=function(toIdValue){
		return $http.post("http://localhost:8082/Project2Middleware/addfriend",toIdValue)
	}
	
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8082/Project2Middleware/pendingrequests")
	}
	
	friendService.updateStatus=function(updatedFriendRequest){
		return $http.put("http://localhost:8082/Project2Middleware/updatestatus",updatedFriendRequest)
	}
	

	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8082/Project2Middleware/friend")
	}
	
	return friendService;
})