// Function to generate multiple passwords
function generatePasswords() {
    const length = parseInt(document.getElementById('lengthInput').value, 10);
    const numPasswords = parseInt(document.getElementById('numPasswordsInput').value, 10);
    const includeUppercase = document.getElementById('uppercaseCheckbox').checked;
    const includeLowercase = document.getElementById('lowercaseCheckbox').checked;
    const includeNumbers = document.getElementById('numberCheckbox').checked;
    const includeSymbols = document.getElementById('symbolCheckbox').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:",.<>?';

    let charset = '';
    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSymbols) charset += symbolChars;

    if (charset === '') {
        alert('Musíte vybrat alespoň jednu kategorii znaků!');
        return;
    }

    let passwords = '';
    for (let j = 0; j < numPasswords; j++) {
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        passwords += `Heslo ${j + 1}: ${password}\n`;
    }

    document.getElementById('passwords').value = passwords;
}

// Function to copy all passwords to clipboard
function copyPasswords() {
    const passwordsField = document.getElementById('passwords');
    passwordsField.select();
    document.execCommand('copy');
    alert('Hesla byla zkopírována do schránky!');
}

// Event listener for changing length and number inputs
document.getElementById('lengthInput').addEventListener('input', function() {
    const lengthValue = document.getElementById('lengthValue');
    lengthValue.textContent = this.value;
});
document.getElementById('numPasswordsInput').addEventListener('input', function() {
    const numPasswordsValue = document.getElementById('numPasswordsValue');
    numPasswordsValue.textContent = this.value;
});

// Show modal when clicking info button
document.getElementById('infoButton').addEventListener('click', function() {
    document.getElementById('infoModal').classList.remove('hidden');
});

// Hide modal when clicking close button
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('infoModal').classList.add('hidden');
});
