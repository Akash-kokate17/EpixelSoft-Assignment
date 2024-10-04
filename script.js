document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    const namePattern = /^[A-Za-z\s]+$/; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const phonePattern = /^\d{10}$/; 
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character

    if (!namePattern.test(firstName)) {
        alert("First name can only contain letters and spaces.");
        return;
    }
    if (!namePattern.test(lastName)) {
        alert("Last name can only contain letters and spaces.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
        return;
    }

    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        password: password
    };

    console.log(formData);
    alert("Form submitted successfully!");
    
    document.getElementById("signupForm").reset();
});
