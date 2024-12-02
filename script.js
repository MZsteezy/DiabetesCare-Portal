// Simple AI Suggestion Feature
function displaySuggestion() {
    const suggestions = [
        "Consider a low-glycemic diet to maintain steady sugar levels.",
        "Exercise regularly to help manage blood glucose.",
        "Stay hydrated and monitor your carb intake.",
        "Monitor your sugar levels frequently and avoid large sugar spikes.",
        "Plan meals and snacks to prevent sudden blood sugar drops."
    ];
    
    // Select a random suggestion
    const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    // Display suggestion in the portal section
    document.getElementById("suggestion").innerText = "AI Suggestion: " + suggestion;
}

// Function to log data entered by the user
function logData() {
    const sugarLevel = document.getElementById("sugarLevel").value;
    const meal = document.getElementById("meal").value;
    const notes = document.getElementById("notes").value;
    
    // Create a new log entry
    const logEntry = document.createElement("div");
    logEntry.innerHTML = `
        <p><strong>Blood Sugar Level:</strong> ${sugarLevel} mg/dL</p>
        <p><strong>Meal:</strong> ${meal}</p>
        <p><strong>Notes:</strong> ${notes}</p>
        <hr>
    `;
    
    // Append the log entry to the logEntries div
    document.getElementById("logEntries").appendChild(logEntry);
    
    // Clear form after logging
    document.getElementById("logForm").reset();
}
