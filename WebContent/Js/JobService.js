/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
		return $http.post("http://localhost:8082/Project2Middleware/addjob",job)
	}
	return jobService;
})