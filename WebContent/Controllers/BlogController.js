/**
 * Blog Controller
 */
app.controller('BlogCtrl',function($scope,Blogservice,$location,$rootScope,$route)
{
$scope.isClicked=false;
$scope.isLiked=false;


$scope.Postblog=function(blog)
{
console.log("In Blog Controller PostBlog function is invoked")
Blogservice.Postblog(blog).then(function(response){
console.log(response.data)
console.log(response.status)
$scope.blog.blogTitle=""
$scope.blog.blogContent=""
},
function(response){
console.log(response.data)
console.log(response.status)
if(response.status==401)
	{
	$location.path('/login')
	}
})
}

$scope.Updateblog=function(id)
{
console.log("In Blog Controller UpdateBlog function")
Blogservice.Updateblog(id).then(function(response){
console.log(response.data)
console.log(response.status)
$location.path('/Getblogsapproved')
},
function(response){
console.log(response.data)
console.log(response.status)	
if(response.status==401)
	{
	$location.path('/login')
	}
})
}

$scope.deleteBlog=function(id)
{
console.log("In Blog Controller deleteBlog function")
Blogservice.deleteBlog(id).then(function(response){
console.log(response.data)
console.log(response.status)
$location.path('/Getblogsapproved')
},
function(response){
console.log(response.data)
console.log(response.status)	
if(response.status==401)
	{
	$location.path('/login')
	}
})
}



//$scope.Getapprovedblogs=function()
//{
//console.log("In Blog Controller Getapprovedblogs function")
//Blogservice.Getapprovedblogs().then(function(response){
//console.log(response.data)
//console.log(response.status)
//$scope.Getapprovedblogs=response.data
//$scope.Getalllikedblogs()
//},
//function(response){
//console.log(response.data)
//console.log(response.status)	
//if(response.status==401)
//	{
//	$location.path('/login')
//	}	
//})
//}

//$scope.Getblogswaitingapproval=function()
//{
//console.log("In Blog Controller Getblogswaitingapproval function")
//Blogservice.Getblogswaitingapproval().then(function(response){
//console.log(response.data)
//console.log(response.status)
//$scope.Getblogswaitingapproval=response.data
//},
//function(response){
//console.log(response.data)
//console.log(response.status)	
//if(response.status==401)
//	{
//	$location.path('/login')
//	}	
//})
//}
//})




function Getblogswaitingapproval(){//select * from job where active=true
		Blogservice.Getblogswaitingapproval().then(function(response){
			console.log("In Blog Controller getblogswaiting function is invoked");
			console.log(response.data);
			//response.data is Array of Active jobs[{... active=true},{...,active=true}] for success
			$scope.Getblogswaitingapproval=response.data
		},function(response){
			//response.data is ErrorClazz object
			$scope.error=response.data
			if(response.status==401)
			$location.path('/login')
		})
	}


function Getapprovedblogs(){//select * from blog where approved=true
	Blogservice.Getapprovedblogs().then(function(response){
		console.log("In Blog Controller getapprovedblogs function is invoked");
		console.log(response.data);
		//response.data is Array of Active jobs[{... active=true},{...,active=true}] for success
		$scope.Getapprovedblogs=response.data
		$scope.Getallblogcomments()
	},function(response){
		//response.data is ErrorClazz object
		$scope.error=response.data
		if(response.status==401)
		$location.path('/login')
	})
}

$scope.Showmoreblogcontent=function(id)
{
	$scope.id=id
	$scope.isClicked=!$scope.isClicked
}


$scope.Likedislike=function(id)
{
console.log("In Blogpost Controller likedislike function",id)	
$scope.isLiked=!$scope.isLiked
Blogservice.Likedislike(id).then(function(response){
console.log(response.data)
console.log(response.status)
$scope.Getapprovedblogs();
},
function(response){
console.log(response.data)
console.log(response.status)
if(response.status==401)
{
$location.path('/login')
}
	
})
}


$scope.Getalllikedblogs=function()
{
console.log("In BlogController Getalllikes function")
Blogservice.Getalllikedblogs().then(function(response){
console.log(response.data)
console.log(response.status)
$scope.Alllikedblogs=response.data
$scope.Getallblogcomments();
},
function(response){
console.log(response.data)
console.log(response.status)	
})
}

$scope.Postcomments=function(commenttxt,id)
{
console.log("In BlogController Postcomments function",commenttxt,id)
Blogservice.Postcomment(commenttxt,id).then(function(response){
console.log(response.data)
console.log(response.status)
$scope.commenttxt=""
console.log(commenttxt)
$scope.Getblogcomments(id);
},
function(response){
console.log(response.data)
console.log(response.status)	
})
}



$scope.Getblogcomments=function(id)
{
console.log("In BlogController Getblogcomments function",id)
Blogservice.Getblogcomments(id).then(function(response){
console.log(response.data)
console.log(response.status)
$scope.Blogcomments=response.data
$scope.Getallblogcomments()
},
function(response){
console.log(response.data)
console.log(response.status)	
})
}


$scope.Getallblogcomments=function()
{
console.log("In BlogController Getallblogcomments function")
Blogservice.Getallblogcomments().then(function(response){
console.log(response.data)
console.log(response.status)
$scope.Allblogcomments=response.data
},
function(response){
console.log(response.data)
console.log(response.status)	
})	
}




Getapprovedblogs()

if($rootScope.loggedInUser.role=='ADMIN')
Getblogswaitingapproval()
})


