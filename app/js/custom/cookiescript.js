$(document).ready(function () {

		//$("#normal_button").click(function() {
			//if($("#normal_button").hasClass("collapsed"))
			//{
			//	window.location.hash = '#logo';
				//alert("collapsed");
				//var img = baseUrl+'front/img/navbar-toggle.png';
				//$(".navbar-toggle").css('background-image', 'none');
			//}
			//else
			//{
				//window.location.hash = '#logo';
				//alert("non - collapsed");
				//var img = baseUrl+'front/img/close.png';
				//$(".navbar-toggle").css('background-image', 'url('+img+')');
			//}
			//alert("clicked");
			//$(".navbar-toggle").blur();
		//});

	/*$("#close_button").hide();
	$("#normal_button").click(function() {
		$("#normal_button").hide();
		$("#close_button").show();
	});

	$("#close_button").click(function() {
		$("#close_button").hide();
		$("#normal_button").show();
	});*/

	$.cookieCuttr({
					cookieAnalytics: false,cookieAcceptButton: true,cookieMessage: 'Myboiler uses cookies, just to track visits to our website, we store no personal details. For more information read our<a href="{{cookiePolicyLink}}" title="read about our cookies"> Privacy Policy</a>.',
					cookiePolicyLink: 'privacy'
				});

				setTimeout(function() {
					$("div.cc-cookies").slideUp("slow");
					$("#logo").css("margin-top","0px");
					//$("#myboiler_top").addClass("navbar-fixed-top");
					$(".nav-bottom").show("fast");
				}, 10000);
		if( $.cookieAccepted() ) {
			// insert the code you do not want to run UNTIL cookies are accepted here
				//$("#myboiler_top").addClass("navbar-fixed-top");
		}
		else
		{
			$(".nav-bottom").hide("fast");
				//$("#myboiler_top").removeClass("navbar-fixed-top");
			if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
				$("#logo").css("margin-top","150px");
			}
		}
});

function email_validate()
{
	var email = $('#sub_email').val();
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(email != undefined && email != '' && re.test(email))
		return true;
	else
	{
		alert('Please enter valid email address');
		$('#sub_email').focus();
		return false;
	}
};
