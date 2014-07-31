//'use strict';
/* 
myBoilerApp.service('myHeader',function()
{
	this.getUrl = function(url)
	{
		alert(url);
		
		if(url=="/engineer")
		{
			myBoilerApp.directive("ngHeader", function()
			{
				return { restrict:'E', templateUrl:'partials/engineer/header.html' };
			});
		}
		else
		{
			myBoilerApp.directive("ngHeader", function()
			{
				return { restrict:'E', templateUrl:'partials/consumer/header.html' };
			});
		}
	}
}); */

myBoilerApp.service('saveDataService', function()
{
	var wTime="N/A"; 
	var wDescription="N/A";
	var cTime, alterPhno, propertyType, propertyOwn, usrSalutation, firstName, lastName, subscribe;
			
	var newno = Math.floor((Math.random()*10000) + 1);
			
	var myDataRef = new Firebase('https://boiling-fire-5811.firebaseio.com/Quote');
		
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
			id: newno,
			
			BoilerType: selected.fuel_type.fType, 
			
			JobType: selected.jType.mData, 
			
			WorkScaleTime: wTime,
			
			WorkDescription: wDescription,
			
			salutation: usrSalutation,
			
			FirstName: firstName,

			LastName: lastName,
			
			user_email: selected.inputemail, 
			
			HouseNameNo: selected.houseno, 
			
			Phoneno: selected.phoneno, 
			
			PostCode: selected.postalcode,
			
			BestTimeToCall: cTime,
			
			AlternatePhone: alterPhno,
			
			PropertyType: propertyType,
			
			PropertyOwner: propertyOwn,
			
			Subscribefor: subscribe
		});
	}
});

myBoilerApp.service('contactsService', function($location)
{
	var url = $location.path();
	
	//alert(url);
	
	var subject, comment, usrSalutation, captchaCode, usrType;
			
	var idno = Math.floor((Math.random()*10000) + 1);
			
	var myDataRef = new Firebase('https://boiling-fire-5811.firebaseio.com/contacts');
		
	this.saveContactInfo = function(details)
	{		
		if(url == "/consumer-contact")
		{
			usrType = "consumer";
		}
		else if(url == "/engineer-contact")
		{
			usrType = "engineer";
		}
		
		if(details.usrsalutation==undefined || details.usrsalutation=='')
		{
			usrSalutation = "N/A";
		}
		else
		{
			usrSalutation = details.usrSalutation;
		}
		
		if(details.subject==undefined)
		{
			subject = "N/A";
		}
		else
		{
			subject = details.subject;
		}
		
		if(details.captcha==undefined)
		{
			captchaCode = "N/A";
		}
		else
		{
			captchaCode = details.captcha;
		}
		
		//alert(usrSalutation+" "+details.first_name);
		
		var newContactRef = myDataRef.push();
		
		newContactRef.set(
		{
			id : idno,
			
			firstName : details.first_name,
			
			lastName : details.last_name,
			
			emailId : details.email,
			
			contactSubject : subject,
			
			userComment : details.comment,
			
			captchaText :  captchaCode,
			
			userType : usrType
		});
	}
});
