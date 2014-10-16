(function () {
	

	myBoilerApp.controller('enggSearchCtrl',['$scope','saveDataService', function($scope, saveDataService)	
	{
		$scope.BoilerFuelTypes = 
		[
			{
				fType :'Gas', 
				bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Safety Certificate'},{mData:'Nest Thermostat Installation'},{mData:'Other'}],
				tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'I\'m Just looking for a quote'}] 
			},
			{			
				fType : 'Oil',
				bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'OFTEC Certificate'},{mData:'Nest Thermostat Installation'},{mData:'Other'}],
				tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'I\'m Just looking for a quote'}] 
			},
			{
				fType :'LPG', 
				bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Safety Certificate'},{mData:'Nest Thermostat Installation'},{mData:'Other'}],
				tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'I\'m Just looking for a quote'}] 
			},
			{
				fType :'Electric', 
				bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'Electrical Safety Certificate'},{mData:'Nest Thermostat Installation'},{mData:'Other'}],
				tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'I\'m Just looking for a quote'}] 
			},
			{
				fType :'Solid', 
				bType : [{mData:'New Boiler Installation'},{mData:'New Central Heating'},{mData:'Boiler Maintenance \/Repair'},{mData:'Boiler Service'},{mData:'HETAS Certificate'},{mData:'Nest Thermostat Installation'},{mData:'Other'}],
				tScale: [{wScale:'ASAP'}, {wScale:'Within 4 days'}, {wScale:'Within 1 month'},{wScale:'Within 3 months'},{wScale:'I\'m Just looking for a quote'}] 
			}
		];
			
		$scope.PropertyTypes = [{pType :'House'},{pType:'Bungalow'},{pType:'Flat/Apartment'},{pType:'Commercial'},{pType:'New Build'}];
		
		$scope.ownerShipTypes = [{ownType: 'Home Owner'},{ownType: 'Tenant'},{ownType: 'Potential Homebuyer'},{ownType: 'Manager/Agent'},{ownType:'Landloard ie Rental Property'}];
			
		$scope.EMAIL_REGEXP = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
		
		$scope.PHONE_EXP = /^[0-9]{10}$/g;

		$scope.master = {};
					
		$scope.isUndefinedOrNull = function(getworkVal)
		{
			if(!angular.isObject(getworkVal) || getworkVal===null)
			{
				wTime = "N/A";
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
			$scope.reset();
		}

		$scope.reset =  function ()
		{
			$scope.selected = angular.copy($scope.master);
			$scope.submitted = false;
			$scope.engg_search.$setPristine();
		}
	}]);

})();