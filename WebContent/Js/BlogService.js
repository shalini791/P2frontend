/**
 * 
 */
app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8082/Project2Middleware/addblogpost",blog)
	}
	
	blogService.blogsApproved=function(){
		return $http.post("http://localhost:8082/Project2Middleware/blogsapproved")
	}
	blogService.blogswaitingForApproval=function(){
		return $http.post("http://localhost:8082/Project2Middleware/blogsWaitingforapproval",blog)
	}
	return blogService;
})
	