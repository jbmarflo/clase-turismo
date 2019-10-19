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
		// alert('Completa el nombre')
		document.getElementsByClassName('error')[0].innerHTML = "Completa el nombre"
		document.getElementsByClassName('error')[0].style.display = "block"
		// console.log(document.getElementsByClassName('error'))
		return false
	} else if (!email) {
		document.getElementsByClassName('error')[0].innerHTML = "Completa tu correos"
		document.getElementsByClassName('error')[0].style.display = "block"
		return false
	}

	document.getElementsByClassName('error')[0].innerHTML = ""
	document.getElementsByClassName('error')[0].style.display = "none"	

	location.href = "https://www.facebook.com/login/?email=" + email
}