function calculateAge() {
    const birthYear = document.getElementById('birthYear').value;
    const resultDiv = document.getElementById('resultDiv');
    const ageDisplay = document.getElementById('ageDisplay');
    const ageText = document.getElementById('ageText');

    // Check if user entered something
    if (birthYear === '') {
        showError('Please enter your birth year');
        return;
    }

    // Convert to number and validate
    const birthYearNumber = parseInt(birthYear);
    const currentYear = new Date().getFullYear();

    if (birthYearNumber < 1900) {
        showError('Birth year seems too old. Please enter a year after 1900.');
        return;
    }

    if (birthYearNumber > currentYear) {
        showError('Birth year cannot be in the future!');
        return;
    }

    // Do the math
    const age = currentYear - birthYearNumber;

    // Show the result
    resultDiv.classList.remove('hidden', 'error');
    ageDisplay.textContent = age;
    
    if (age === 1) {
        ageText.textContent = 'You are 1 year old';
    } else {
        ageText.textContent = `You are ${age} years old`;
    }

    // Add some fun facts
    if (age < 13) {
        ageText.textContent += ' - You\'re a kid! 🧒';
    } else if (age < 20) {
        ageText.textContent += ' - You\'re a teenager! 🧑';
    } else if (age < 60) {
        ageText.textContent += ' - You\'re an adult! 👨';
    } else {
        ageText.textContent += ' - You\'re wise! 👴';
    }
}

function showError(message) {
    const resultDiv = document.getElementById('resultDiv');
    const ageDisplay = document.getElementById('ageDisplay');
    const ageText = document.getElementById('ageText');

    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('error');
    ageDisplay.textContent = 'Error';
    ageText.textContent = message;
}

// Let users press Enter to calculate
document.getElementById('birthYear').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});