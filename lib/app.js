var app1 = angular.module('DemoApp',[]); //module definition,DemoApp is the name of module
	app1.controller('DemoController', function($scope){
    console.log('inside demoapp1');
	$scope.tutorialName = "Angular JS";  //assigning value to property
    //The scope object is used to pass information from the controller to the view. So in our case, the scope object will be used to hold a variable called “Angular JS”.
    //We are defining the variable tutorialName and assigning the value “Angular JS” to it
    //Scope object is the main object which is used to pass information from the controller to the view.
    //Member variable added to scope object
    $scope.fullName1=function(firstName,lastname){
		return firstName + lastname;
		}
    //We are creating a behavior called “fullName1”. This behavior is a function which accepts 2 parameters (firstName,lastname).
    //The behavior then returns the concatenation of these 2 parameters.
    $scope.TopicNames =[
		{name: "What controller do from Angular's perspective"},
		{name: "Controller Methods"},
		{name: "Building a basic controller"}];	
    $scope.pDescription="This topic looks at how Angular JS works \nModels in Angular JS";
    $scope.pname="Guru99";
	$scope.Topic =
		{
			Controller:true,
			Models:false
		};
    $scope.Topicselect =
		{
			option1 : "Controller",
			option2 : "Module"
		};     
    $scope.tName = function() {
        return $scope.tName;
    };
	});
