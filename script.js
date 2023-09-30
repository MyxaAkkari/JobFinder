const popupButton = document.getElementById("popupButton");
const popupDialog = document.getElementById("popupDialog");
const closeButton = document.getElementById("closeButton");

popupButton.addEventListener("click", () => {
    popupDialog.style.display = "block";
});

closeButton.addEventListener("click", () => {
    popupDialog.style.display = "none";
});

function submitJob() {
    // Get input values
    var jobTitle = document.getElementById("jobTitle").value;
    var companyName = document.getElementById("companyName").value;
    var jobDescription = document.getElementById("jobDescription").value;
    var location = document.getElementById("location").value;
    var companyDescription = document.getElementById("companyDescription").value;
    var companyEmail = document.getElementById("companyEmail").value;
    var currentDate = new Date();


    // Create a job listing object
    var jobListing = {
        title: jobTitle,
        company: companyName,
        description: jobDescription,
        joblocation: location,
        codescription: companyDescription,
        email: companyEmail,
        timestamp: currentDate.toISOString()
    };

    // Get existing job listings from local storage or initialize an empty array
    var jobListings = JSON.parse(localStorage.getItem("jobListings")) || [];

    // Add the new job listing to the array
    jobListings.push(jobListing);

    // Store the updated job listings in local storage
    localStorage.setItem("jobListings", JSON.stringify(jobListings));

    // Clear the form fields
    document.getElementById("jobTitle").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("jobDescription").value = "";
    document.getElementById("location").value = "";
    document.getElementById("companyDescription").value = "";
    document.getElementById("companyEmail").value = "";

    alert("Job listing submitted successfully!");
}