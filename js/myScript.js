function checkPassword(){
	if(document.getElementById("password").value!=document.getElementById("confirm_password").value)
	{
		alert("Password Mismatch1");
		return false;
	}
	else
	{
		alert("Success");
		return true;
	}
	
}
function enableButton(){
	if(document.getElementById("checkBox").checked){
		document.getElementById("submitBtn").disabled=false;
	}
	else{
		document.getElementById("submitBtn").disabled=true;
	}
}