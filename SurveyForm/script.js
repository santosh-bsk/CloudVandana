function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if gender is selected
    if (!firstName || !lastName || !dob || country === "" || !gender || !profession || !email || !mobile) {
        alert('Please fill out all fields.');
        return;
    }
   

    // Prepare data for the popup
    let popupData = `<p><strong>First Name:</strong> ${firstName}</p>`;
    popupData += `<p><strong>Last Name:</strong> ${lastName}</p>`;
    popupData += `<p><strong>Date of Birth:</strong> ${dob}</p>`;
    popupData += `<p><strong>Country:</strong> ${country}</p>`;
    popupData += `<p><strong>Gender:</strong> ${gender[0].value}</p>`;
    popupData += `<p><strong>Profession:</strong> ${profession}</p>`;
    popupData += `<p><strong>Email:</strong> ${email}</p>`;
    popupData += `<p><strong>Mobile Number:</strong> ${mobile}</p>`;

    // Display the popup
    document.getElementById('popup-data').innerHTML = popupData;
    document.getElementById('popup').style.display = 'block';

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
