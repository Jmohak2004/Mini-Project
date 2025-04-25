document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("registrationForm"); // Change to your form's ID

    form.addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let rollNumber = document.getElementById("rollNumber").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();

        let nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
        let rollRegex = /^[0-9]+$/; // Only numbers
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
        let phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits

        let errors = [];

        if (!nameRegex.test(name)) {
            errors.push("Name should contain only letters.");
        }
        if (!rollRegex.test(rollNumber)) {
            errors.push("Roll number should be a number.");
        }
        if (!emailRegex.test(email)) {
            errors.push("Invalid email format. Email must contain '@' and '.'.");
        }
        if (!phoneRegex.test(phone)) {
            errors.push("Phone number must be exactly 10 digits.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n")); // Display errors
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});


