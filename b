// Get a reference to the form
var applyForm = document.getElementById("applyForm");

// Listen for form submission
applyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var spokenLanguages = [];
    var languageCheckboxes = document.getElementsByName("languages");

    // Iterate through language checkboxes to get selected languages
    for (var i = 0; i < languageCheckboxes.length; i++) {
        if (languageCheckboxes[i].checked) {
            spokenLanguages.push(languageCheckboxes[i].value);
        }
    }

    var startImmediately = document.querySelector('input[name="startImmediately"]:checked').value;

    // Retrieve the company email from the "Apply for position" button's data attribute
    var submitApplicationButton = document.getElementById("submitApplication");
    var recipientEmail = submitApplicationButton.getAttribute("data-company-email");

    // Compose the email subject and body
    var subject = "Job Application from " + fullName;
    var body = "Applicant Name: " + fullName + "\n";
    body += "Email: " + email + "\n";
    body += "Phone Number: " + phoneNumber + "\n";
    body += "Spoken Languages: " + spokenLanguages.join(", ") + "\n";
    body += "Can Start Working Immediately: " + startImmediately + "\n";

    // Encode the subject and body for use in the mailto link
    var encodedSubject = encodeURIComponent(subject);
    var encodedBody = encodeURIComponent(body);

    // Create the mailto link with the recipient's email address
    var mailtoLink = "mailto:" + recipientEmail + "?subject=" + encodedSubject + "&body=" + encodedBody;

    // Create a temporary link element to trigger the email client
    var link = document.createElement("a");
    link.href = mailtoLink;

    // Simulate a click on the link to open the user's email client
    link.click();

    // Show a popup message
    alert("We are sorry, but you will have to attach your CV and send the mail manually to the company due to technical issues we are working on fixing at the moment.");

    // Close the job details popup after submission
    closePopup();
});
