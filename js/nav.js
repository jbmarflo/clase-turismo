var active = false
function navEffect() {
	if (!active) {
		active = true
		document.getElementById('nav-mobile').style.display = "block"
	} else {
		document.getElementById('nav-mobile').style.display = "none"
		active = false
	}
}

function sendContact (event) {
	event.preventDefault()
	var name = document.getElementsByName('name')[0].value, 
		email = document.getElementsByName('email')[0].value, 
		description = document.getElementsByName('comments')[0].value

	if (!name) {
		alert('Completa el nombre')
		return false
	} else if (!email) {
		alert('Completa tu correos')
		return false
	}	

	location.href = "https://www.facebook.com/login/?email=" + email
}