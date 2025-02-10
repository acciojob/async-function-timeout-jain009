document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value, 10);
    const output = document.getElementById("output");

    // Validate input
    if (!text) {
        alert("Please enter a message.");
        return;
    }
    if (isNaN(delay) || delay < 0) {
        alert("Please enter a valid delay in milliseconds.");
        return;
    }

    // Function to create a delay
    function delayMessage(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Wait for the delay, then display the message
    await delayMessage(delay);
    output.textContent = text;
});