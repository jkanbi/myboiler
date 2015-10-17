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
			
		
	var myDataRef = new Firebase('https://myboiler.firebaseio.com/posts/job_form_posts');
	this.saveInfo = function(selected)
	{		
		if(selected.subscribefor==undefined || selected.subscribefor==false) {
				subscribe = "No";
		} else {
			subscribe = "Yes";
		}
		
		if(selected.usr_salutation==undefined || selected.usr_salutation=='') {
			usrSalutation = "No";
		} else {
			usrSalutation=selected.usr_salutation;
		}
		
		if(selected.user_fname==undefined) {
			firstName = "Not Provided";
		} else {
			firstName = selected.user_fname;
		}
		
		if(selected.user_lname==undefined) {
			lastName = "Not Provided";
		} else {
			lastName = selected.user_lname;
		}
		
		if(selected.workDescription==undefined || selected.workDescription=="")	{
			wDescription = "No Description Provided";
		} else {
			wDescription = selected.workDescription;
		}
		
		if(selected.call_time=='' || selected.call_time==undefined) {
			cTime = "N/A";
		} else {
			cTime = selected.call_time;
		}
		
		if(selected.alter_phno=='' || selected.alter_phno==undefined) {
			alterPhno = "N/A";
		} else {
			alterPhno = selected.alter_phno;
		}
		
		if(selected.propertyType==''|| selected.propertyType==undefined) {
			propertyType = "N/A";
		} else {
			propertyType = selected.propertyType;
		}
		
		if(selected.propertyOwner=='' || selected.propertyOwner==undefined) {
			propertyOwn = "N/A";
		} else {
			propertyOwn = selected.propertyOwner;
		}
		
		var newRef = myDataRef.push();
		/*  alert(newRef.name());  */
		newRef.set(
		{
			_TimeStamp: TimeStamp, 

			aux_id: uniqueId,
			aux_Subscribefor: subscribe,

			job_BoilerType: selected.fuel_type.fType, 
			job_JobType: selected.jType.mData, 
			job_WorkScaleTime: wTime,
			job_WorkDescription: wDescription,
			
			contact_BestTimeToCall: cTime,
			contact_salutation: usrSalutation,
			contact_FirstName: firstName,
			contact_LastName: lastName,
			contact_user_email: selected.inputemail, 
			contact_Phoneno: selected.phoneno, 
			contact_AlternatePhone: alterPhno,

			property_HouseNameNo: selected.houseno, 
			property_PostCode: selected.postalcode,
			property_PropertyOwner: propertyOwn,
			property_PropertyType: propertyType
		});
	}
});
