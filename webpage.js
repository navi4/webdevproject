
 /*
      Script name: webpage.js
      Description: Used to validte input on the contact form.
      Author: Ivan Wiebe
      Date Created:01-12-2017
      */
      function formFieldHasInput(fieldElement)
      {
      	return fieldElement.value && trim(fieldElement.value);
      }

      function validate(e)
      {
	//	Hides all error elements on the page
	hideErrors();
	//	Determine if the form has errors
	if (formHasErrors())
	{
		e.preventDefault();
		return false;
	}
	return true;
}

function formHasErrors()
{
	var errorFlag = false;
	//checking for Error on tourContact from has any errors
	var customerInfo = ["fullname","phonenumber","email"];
	for (var i = 0; i < customerInfo.length; i++) {

		var field = document.getElementById(customerInfo[i]);
		if(!formFieldHasInput(field)) 
		{
			var error = document.getElementById(customerInfo[i]+ "_error");
			error.style.display = "block";
			if (!errorFlag) 
			{
				field.select(); 
				field.focus();
			}
			errorFlag = true;
		}
	}

	//validating if the phone number is valid or not 
	// regex for phone number 
	var regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);

	var phoneNumber = document.getElementById("phonenumber");

	if(!regex.test(phoneNumber.value))
	{
		document.getElementById("phonenumberformat_error").style.display = "block";
		if(!errorFlag){
			phoneNumber.focus();
			phoneNumber.select();
		}
		errorFlag = true;
	}

	//validating if the email address is valid or not 
	// regex for email 
	var regex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

	var emailAddress = document.getElementById("email");

	if(!regex.test(emailAddress.value))
	{
		document.getElementById("emailformat_error").style.display = "block";
		if(!errorFlag){
			emailAddress.focus();
			emailAddress.select();
		}
		errorFlag = true;
	}
	return errorFlag;
}

function resetForm(e)
{
	// Confirm that the user wants to reset the form.
	if ( confirm('Resting yaaah...Opps?') )
	{
		// Ensure all error fields are hidden
		hideErrors();
		document.getElementById("fullname").focus();
		return true;
	}
	// Prevents the form from resetting
	e.preventDefault();
	return false;	
}

function hideErrors()
{
	var errorFields = document.getElementsByClassName("error");
	for (var i = 0; i < errorFields.length; i++) {
		errorFields[i].style.display = "none";
	}
}


function load()
{
	hideErrors();
	// Add event listener for the form submit
	document.getElementById("container").addEventListener("submit", validate);
	// Add event listener for the form reset
	document.getElementById("container").addEventListener("reset", resetForm);
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);