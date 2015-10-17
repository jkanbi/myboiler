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

myBoilerApp.service('contactsService', function($location)
{
	var url = $location.path();

	//alert(url);

	var subject, comment, usrSalutation, captchaCode, usrType;

	var idno = Math.floor((Math.random()*10000) + 1);

	var now = new Date();
	var uniqueId = now.getTime();
	var TimeStamp = now.toGMTString();

	var myDataRef = new Firebase('https://myboiler.firebaseio.com/posts/contact_form_posts');


	this.saveContactInfo = function(details)
	{

		/*
		if(url == "/consumer-contact")
		{
			usrType = "consumer";
		}
		else if(url == "/engineer-contact")
		{
			usrType = "engineer";
		}
		*/

		if(details.usrType==undefined || details.usrType=='')
		{
			usrType = "N/A";
		}
		else
		{
			usrType = details.usrType;
		}


		if(details.usrsalutation==undefined || details.usrsalutation=='')
		{
			usrSalutation = "N/A";
		}
		else
		{
			usrSalutation = details.usrsalutation;
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
			TimeStamp : TimeStamp,
			userType : usrType,
			title : usrSalutation,
			firstName : details.first_name,
			lastName : details.last_name,
			emailId : details.email,
			contactSubject : subject,
			userComment : details.comment,
			id : idno
		});
	}
});
