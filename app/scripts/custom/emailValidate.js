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
