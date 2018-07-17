/**
 * Blog Service
 */
app.factory('Blogservice',function($http){
	
var blogservice={}

blogservice.Postblog=function(blog)
{
console.log("In Blog service Postblog function",blog)
return $http.post("http://localhost:8082/Project2Middleware/Postblog",blog)
}

blogservice.Updateblog=function(id)
{
console.log("In Blog service Updateblog function",id)
return $http.get("http://localhost:8082/Project2Middleware/Approveblog/"+id)
}


blogservice.Getapprovedblogs=function()
{
console.log("In Blog service Getapprovedblogs function")
return $http.get("http://localhost:8082/Project2Middleware/Getapprovedblogs")
}


blogservice.Getblogswaitingapproval=function()
{
console.log("In Blog service Getblogswaitingapproval function")
return $http.get("http://localhost:8082/Project2Middleware/Getblogswaitingapproval")
}

blogservice.Likedislike=function(id)
{
console.log("In Blog service likedislike function",id)
return $http.get("http://localhost:8082/Project2Middleware/Likeblog/"+id)
}

blogservice.Getalllikedblogs=function()
{
console.log("In Blog service Getalllikedblogs function")
return $http.get("http://localhost:8082/Project2Middleware/Getalllikedblogs")
}

blogservice.Postcomment=function(commenttxt,id)
{
console.log("In Blog service Postcomment function")
return $http.get("http://localhost:8082/Project2Middleware//Postcomment/"+commenttxt+"/"+id)
}

blogservice.Getblogcomments=function(id)
{
console.log("In Blog service Getblogcomments function")
return $http.get("http://localhost:8082/Project2Middleware/Getblogcomments/"+id)
}

blogservice.Getallblogcomments=function()
{
console.log("In Blog service Getallblogcomments function")
return $http.get("http://localhost:8082/Project2Middleware/Getallblogcomments")
}

	return blogservice;
})