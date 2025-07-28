// Exercise 6
const validate = () => {
	
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastN = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById("errorAddress");
	const errorLastN = document.getElementById("errorLastN");
	const errorPassword = document.getElementById("errorPassword");
	const errorPhone = document.getElementById("errorPhone");

	let error = 0;

	//Cleaning error classes
	fName.classList.remove("is-invalid");
	fEmail.classList.remove("is-invalid");
	fAddress.classList.remove("is-invalid");
	fLastN.classList.remove("is-invalid");
	fPassword.classList.remove("is-invalid");
	fPhone.classList.remove("is-invalid");

	//Cleaning error displays
	errorName.style.display = "none";
	errorEmail.style.display = "none";
	errorAddress.style.display = "none";
	errorLastN.style.display = "none";
	errorPassword.style.display = "none";
	errorPhone.style.display = "none";

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.trim() == ""){
		fName.classList.add("is-invalid");
		errorName.style.display = "block";
		errorName.textContent = "First name is required.";
		error++;
	} else if (fName.value.trim().length < 3) {
		fName.classList.add("is-invalid");
		errorName.style.display = "block";
		errorName.textContent = "First name is required and must have at least 3 characters.";
		error++;
	} else if (!/^[a-zA-Z]+$/.test(fName.value.trim())) {
		fName.classList.add("is-invalid");
		errorName.style.display = "block";
		errorName.textContent = "First name must contain only letters.";
		error++;
	}

	if(fEmail.value == ""){
		error++;
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "block";
		errorEmail.textContent = "Email is required.";
		error++;
	} else if (fEmail.value.trim().length < 3) {
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "block";
		errorEmail.textContent = "Email must have at least 3 characters.";
		error++;
	} else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(fEmail.value.trim())) {
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "block";
		errorEmail.textContent = "Please enter a valid email address.";
		error++;
	}
	 
	if (fAddress.value.trim() === "") {
		fAddress.classList.add("is-invalid");
		errorAddress.style.display = "block";
		errorAddress.textContent = "Address is required.";
		error++;
	} else if (fAddress.value.trim().length < 3) {
		fAddress.classList.add("is-invalid");
		errorAddress.style.display = "block";
		errorAddress.textContent = "Address must have at least 3 characters.";
		error++;
	}

	if(fLastN.value.trim() == ""){
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "block";
		errorLastN.textContent = "Last name is required.";
		error++;
	} else if (fLastN.value.trim().length < 3) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "block";
		errorLastN.textContent = "Last name is required and must have at least 3 characters.";
		error++;
	} else if (!/^[a-zA-Z]+$/.test(fLastN.value.trim())) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "block";
		errorLastN.textContent = "Last name must contain only letters.";
		error++;
	}

	if(fPassword.value.trim() == ""){
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "block";
		errorPassword.textContent = "Password is required.";
		error++;
	} else if (fPassword.value.trim().length < 3) {
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "block";
		errorPassword.textContent = "Password is required and must have at least 3 characters.";
		error++;
	} else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/.test(fPassword.value.trim())) {
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "block";
		errorPassword.textContent = "Password must contain at least one letter and one number.";
		error++;
	}
	
	if (fPhone.value.trim() === "") {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "block";
		errorPhone.textContent = "Phone number is required.";
		error++;
	} else if (fPhone.value.trim().length < 3) {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "block";
		errorPhone.textContent = "Phone number must have at least 3 digits.";
		error++;
	} else if (!/^[0-9]+$/.test(fPhone.value.trim())) {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "block";
		errorPhone.textContent = "Phone number must contain only numbers.";
		error++;
	}

	if(error>0){
		alert("Please fill in all required fields.");
	}else{
		alert("Form submitted successfully");
	}

}
