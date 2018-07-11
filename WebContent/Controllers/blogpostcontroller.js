/**
 * BlogCtrl
 */
app.controller('BlogCtrl',function($scope,BlogService,$location){
	$scope.addBlog=function(blog){
		BlogService.addBlog(blog).then(
				function(response){
					alert('blog details inserted successfully')
					$location.path('/home')
				},function(response){
					//3 return statement for error in middleware
					$rootscope.error=response.data
					if(response.status==401)
						$rootScope.error=response.data
						$location.path('/login')
					})
					
				}
	})
	
	function blogsApproved(){
	BlogService.blogsApproved().then(function(response){
		$scope.blogsapproved=response.data
		if(response.status==401)
			$rootScope.error=response.data
			$location.path('/login')
			console.log(response.data)
	})
	
	function blogsWait(){
		BlogService.blogsWaitingforApproval().then(
				function(response){
					$scope.blogsWait=response.data
				},function(response){
	           		//$scope.error=response.data //ErrorClazz
					console.log(response.data)
					console.log(response.status)
					
					if(response.status==401)
						$rootScope.error=response.data
						$location.path('/login')
					
				})
				}
	blogsWait()
	}
