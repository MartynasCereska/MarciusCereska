document.getElementById('submitButton').addEventListener('click', () => {
    // Collect form data
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);

    // Validate the email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return; // Exit the function if email is invalid
    }

    // Validate the phone number (8 to 12 digits)
    const phonePattern = /^\d{8,12}$/;  // Updated to allow 8 to 12 digits
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid phone number (8 to 12 digits).");
        return; // Exit the function if phone number is invalid
    }

    // Validate the address (it shouldn't be empty)
    if (address.trim() === "") {
        alert("Please enter a valid address.");
        return; // Exit the function if address is empty
    }

    // Collect numbers into an array
    const numbers = [num1, num2, num3, num4, num5];

    // Calculate average
    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

    // Display results on the webpage, formatted with labels
    let resultText = `
        <strong>Name:</strong> ${name}<br>
        <strong>Surname:</strong> ${surname}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Phone:</strong> ${phone}<br>
        <strong>Address:</strong> ${address}<br>
        <strong>Field 1:</strong> ${num1}<br>
        <strong>Field 2:</strong> ${num2}<br>
        <strong>Field 3:</strong> ${num3}<br>
        <strong>Field 4:</strong> ${num4}<br>
        <strong>Field 5:</strong> ${num5}<br>
    `;

    // Display the formatted result in the result div
    document.getElementById('result').innerHTML = resultText;

    // Select the div to display the average
    const averageDiv = document.getElementById('average');
    averageDiv.innerHTML = `<strong>Average:</strong> ${average.toFixed(2)}`;

    // Apply color based on the average score
    if (average < 50) {
        averageDiv.style.color = 'red'; // Directly applying style as a fallback
    } else if (average >= 50 && average <= 80) {
        averageDiv.style.color = 'orange'; // Directly applying style as a fallback
    } else {
        averageDiv.style.color = 'green'; // Directly applying style as a fallback
    }

    // Prepare the data for the text file
    const userData = `
Name: ${name}
Surname: ${surname}
Email: ${email}
Phone: ${phone}
Address: ${address}
Field 1: ${num1}
Field 2: ${num2}
Field 3: ${num3}
Field 4: ${num4}
Field 5: ${num5}
Average: ${average.toFixed(2)}
    `;

    // Clean up the URL object
    URL.revokeObjectURL(a.href);
});