var crootdir = "partials/consumer/";
var erootdir = "partials/engineer/";

myBoilerApp.controller('headCtrl',function($scope, $location)
{
	var url = $location.path();

	if(url=='/' || url=='/consumer' || url=='/index.html')
	{
		setCHeadFoot($scope);
		$scope.mainBody = {name:crootdir+'consumer_main_content.html', url:crootdir+'consumer_main_content.html'};
	}
	
	if(url=='/cmanuals')
	{
		setCHeadFoot($scope);
	 	$scope.mainBody = {name:crootdir+'manuals.html', url:crootdir+'manuals.html'}; 
	}
	
	if(url=='/consumer-engineer-search')
	{
		setCHeadFoot($scope);
		$scope.mainBody = {name:crootdir+'newengineerSearch.html', url:crootdir+'newengineerSearch.html'};
	} 
	
	if(url=='/engineer')
	{
		setEHeadFoot($scope);
		$scope.mainBody = { name : erootdir+'engineer_main_content.html', url:erootdir+'engineer_main_content.html'};
	}
	
	$scope.reloadhead = function()
	{
		setTimeout(function()
		{
			window.location.reload();
		}, 800);
	}
});

myBoilerApp.controller('enggSearchCtrl',['$scope','saveDataService', function($scope, saveDataService)	
{
	$scope.BoilerFuelTypes = 
	[
		{
			fType :'Gas', 
			bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Safety Certificate'},{mData:'Other'}],
			tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'Im Just looking for a quote'}] 
		},
		{			
			fType : 'Oil',
			bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Safety Certificate'},{mData:'Other'}],
			tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'Im Just looking for a quote'}] 
		},
		{
			fType :'LPG', 
			bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Safety Certificate'},{mData:'Other'}],
			tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'Im Just looking for a quote'}] 
		},
		{
			fType :'Electric', 
			bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Safety Certificate'},{mData:'Other'}],
			tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'Im Just looking for a quote'}] 
		},
		{
			fType :'Solid', 
			bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Safety Certificate'},{mData:'Other'}],
			tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'Im Just looking for a quote'}] 
		}
	];
		
	$scope.PropertyTypes = [{pType :'House'},{pType:'Bungalow'},{pType:'Flat/Apartment'},{pType:'Commercial'},{pType:'New Build'}];
	
	$scope.ownerShipTypes = [{ownType: 'Home Owner'},{ownType: 'Tenant'},{ownType: 'Potential Homebuyer'},{ownType: 'Manager/Agent'},{ownType:'Landloard ie Rental Property'}];
		
	$scope.EMAIL_REGEXP = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/i;
	
	$scope.PHONE_EXP = /^[0-9]{10}$/g;
				
	$scope.isUndefinedOrNull = function(getworkVal)
	{
		if(!angular.isObject(getworkVal) || getworkVal===null)
		{
			wTime = "N/A";
			//console.log(wTime);
			return;
		}
		else
		{
			wTime = $scope.selected.work_timescale.wScale;
			console.log(wTime);
		}
	}
	
	$scope.saveData = function()
	{
		var status = saveDataService.saveInfo($scope.selected);
		alert("Thank you For Requesting Quote");
	}
}]);

function setCHeadFoot($scope)
{
	$scope.head = {name : crootdir+'header.html', url: crootdir+'header.html'};
	$scope.foot = {name : crootdir+'footer.html', url:crootdir+'footer.html'};
}

function setEHeadFoot($scope)
{
	$scope.head = {name : erootdir+'header.html', url: erootdir+'header.html'};
	$scope.foot = {name : erootdir+'footer.html', url: erootdir+'footer.html'};
}