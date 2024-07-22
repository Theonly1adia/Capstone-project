function validateForm(){
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const toGo = document.getElementById("toGo");
    const travelers = document.getElementById("travelers");
    const errorMessage = document.getElementById("errorMessage");

    if (name.value.trim() === ""){
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (phone.value.trim() === '') {
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    if (toGo.value.trim() === '') {
        toGo.classList.add('is-invalid');
        isValid = false;
    } else {
        toGo.classList.remove('is-invalid');
    }

    if (travelers.value.trim() === '') {
        travelers.classList.add('is-invalid');
        isValid = false;
    } else {
        travelers.classList.remove('is-invalid');
    }

    return isValid;
}

function handleSubmit() {
    if (validateForm()) {
        // Form is valid, submit the form or perform your actions
        alert('Form submitted successfully!');
    } else {
        // Form is invalid, show error messages
        alert('Please fill out all required fields correctly.');
    }

}

    

    