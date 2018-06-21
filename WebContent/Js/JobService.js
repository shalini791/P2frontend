/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
		return $http.post("http://localhost:8082/Project2Middleware/addjob",job)
	}
	
	jobService.getActiveJobs=function(){
		return $http.get("http://localhost:8082/Project2Middleware/activejobs")
	}
	
	jobService.getInActiveJobs=function(){
		return $http.get("http://localhost:8082/Project2Middleware/inactivejobs")
	}
	jobService.updateActiveStatus=function(job){
		return $http.put("http://localhost:8082/Project2Middleware/updatejob",job)
	}
	return jobService;
})