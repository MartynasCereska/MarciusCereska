// Function to get the current time and format it as HH:MM:SS
function updateClock() {
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Format hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Format minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Format seconds
    const formattedTime = `${hours}:${minutes}:${seconds}`; // Combine to HH:MM:SS

    // Update the content of the clock element
    document.getElementById('clock').textContent = formattedTime;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Call it once initially to avoid delay
updateClock();
