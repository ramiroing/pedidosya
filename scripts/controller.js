var app = angular.module('App',[]);

app.controller('Controller', function($scope) {
	
	$scope.spanishLang = true
	$scope.englishLang = false
	$scope.PortLang = false
	$scope.selectedPage = 'pages/home.html'
	
	$scope.sections = [
		{ name: 'Home' , selected: true , page: 'pages/home.html' },
		{ name: 'HTML5' , selected: false , page: 'pages/html5.html' },
		{ name: 'CSS3' , selected: false , page: 'pages/css3.html' },
		{ name: 'JS' , selected: false , page: 'pages/javascript.html' },
		{ name: 'Performance' , selected: false , page: 'pages/perf.html' },
		{ name: 'About me' , selected: false , page: 'pages/about.html'}
	]

	$scope.changeLang = function(lang){
		$scope.spanishLang = lang === 'UY'
		$scope.englishLang = lang === 'EN'
		$scope.PortLang = lang === 'BR'
	}

	$scope.clickOnTab = function(idx){
		
		$scope.sections.map( function(elem){
			elem.selected = (idx.name===elem.name);
			$scope.selectedPage = elem.selected ? elem.page : $scope.selectedPage
			return elem
		})
	}
});

