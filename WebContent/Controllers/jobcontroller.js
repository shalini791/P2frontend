/**
 * JobCtrl
 */
app.controller('JobCtrl',function($scope,JobService,$location,$rootscope){
	$scope.addJob=function(job){
		JobService.addJob(job).then(
				function(response){
					alert("Job details inserted successfully")
					$location.path('/home')
				},function(response){
					$scope.error=response.data
					if($scope.error.errorcode==7)
						$rootscope.error=response.data
						$location.path('/login')
				
	     })
	   }
   })
	