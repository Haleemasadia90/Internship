const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById("phone").value;

    if(firstName === "" || lastName === "" || !gender || email === "" || country === "" || phone === ""){
        alert("Please fill all fields.");
        return;
    }

    if(phone.length !== 10 || isNaN(phone)){
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert("Registration Successful!");
    form.reset();
});