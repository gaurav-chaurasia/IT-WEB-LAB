const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const date = document.getElementById('date');
const message = document.getElementById('message');

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
    
    formControl.className = 'form error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form success';
}
	
function checkInputs () {
    const usernameValue = username.value.trim();;
    const emailValue = email.value.trim();


	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank!');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email!');
	} else {
		setSuccessFor(email);
    }
}


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});


