myBoilerApp.service('saveDataService', function()
{
	var wTime="N/A"; 
	var wDescription="N/A";
	//var timeStamp = Date.now()
	//var submitTimeStamp = (timeStamp | date:'medium') ;
	//var submitTimeStamp = new Date().toGMTString(); 
	var now = new Date();
	var uniqueId = now.getTime();
	var TimeStamp = now.toGMTString();
	//var timeNow = now.getTime + " " +;
	//var dateNow = now.getDate;

	var cTime, alterPhno, propertyType, propertyOwn, usrSalutation, firstName, lastName, subscribe;
	
	//used to generate unique non sequential no for the id:	
	var newno = Math.floor((Math.random()*10000) + 1);
			
	var myDataRef = new Firebase('https://myboiler.firebaseio.com/posts/jobLeads');
		
	this.saveInfo = function(selected)
	{		
		if(selected.subscribefor==undefined || selected.subscribefor==false)
		{
			subscribe = "No";
		}
		else
		{
			subscribe = "Yes";
		}
		
		if(selected.usr_salutation==undefined || selected.usr_salutation=='')
		{
			usrSalutation = "No";
		}
		else
		{
			usrSalutation=selected.usr_salutation;
		}
		
		if(selected.user_fname==undefined)
		{
			firstName = "Not Provided";
		}
		else
		{
			firstName = selected.user_fname;
		}
		
		if(selected.user_lname==undefined)
		{
			lastName = "Not Provided";
		}
		else
		{
			lastName = selected.user_lname;
		}
		
		if(selected.workDescription==undefined || selected.workDescription=="")
		{
			wDescription = "No Description Provided";
		}
		else
		{
			wDescription = selected.workDescription;
		}
		
		if(selected.call_time=='' || selected.call_time==undefined)
		{
			cTime = "N/A";
		}
		else
		{
			cTime = selected.call_time;
		}
		
		if(selected.alter_phno=='' || selected.alter_phno==undefined)
		{
			alterPhno = "N/A";
		}
		else
		{
			alterPhno = selected.alter_phno;
		}
		
		if(selected.propertyType==''|| selected.propertyType==undefined)
		{
			propertyType = "N/A";
		}
		else
		{
			propertyType = selected.propertyType;
		}
		
		if(selected.propertyOwner=='' || selected.propertyOwner==undefined)
		{
			propertyOwn = "N/A";
		}
		else
		{
			propertyOwn = selected.propertyOwner;
		}
		
		var newRef = myDataRef.push();
		/*  alert(newRef.name());  */
		newRef.set(
		{
			id: uniqueId,

			TimeStamp: TimeStamp, 

			Subscribefor: subscribe,

			JobDetails:{
			
				BoilerType: selected.fuel_type.fType, 
				
				JobType: selected.jType.mData, 
				
				WorkScaleTime: wTime,
				
				WorkDescription: wDescription,

				BestTimeToCall: cTime,
				
				},

			ContactDetails:
				{

				salutation: usrSalutation,
			
				FirstName: firstName,

				LastName: lastName,
			
				user_email: selected.inputemail, 
			
				Phoneno: selected.phoneno, 
				
				AlternatePhone: alterPhno,

				HouseNameNo: selected.houseno, 

				PostCode: selected.postalcode,

				PropertyOwner: propertyOwn,

				},
			

			PropertyDetails:
				{
			
				PropertyType: propertyType,

				HouseNameNo: selected.houseno, 

				PostCode: selected.postalcode,

				}
		});
	}
});
