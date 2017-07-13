var app = angular.module("uiDevApp", ['ngSanitize']);

app.controller("uiDevCtrl", ["$scope", "$http", function(s, h){

	var jsonUrl = "data/naren.json";
	var path = window.location.hostname.substring(0, window.location.hostname.indexOf(".uidev"));
	if(path){
		jsonUrl = "data/"+path+".json";
	}

	//use http://jsonformat.com/#jsondataurllabel
	h.get(jsonUrl).then(function(successData){
		var data = successData.data;
		s.name = data.name;
		s.location = data.location;
		s.email = data.email;
		s.phNumber = data.phNumber;

		s.gitHubLink = data.gitHubLink;
		s.linkedInUrl = data.linkedInUrl;
		s.fbUrl = data.fbUrl;
		s.googlePlusUrl = data.googlePlusUrl;
		s.shortName = data.shortName;
		s.birthLocation = data.birthLocation;
		s.employerName = data.employerName;


		s.educationDetails = data.educationDetails;
		s.workExperience = data.workExperience;
		s.clients = data.clients;

	}, function(errData){

	})
	
}])