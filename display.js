// Get job listings from local storage
var jobListings = JSON.parse(localStorage.getItem("jobListings")) || [];

// Sort the job listings by job title
jobListings.sort(function(a, b) {
    var titleA = a.title.toLowerCase();
    var titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
});

// Get the UL element where job listings will be displayed
var jobListingsUl = document.getElementById("jobListings");

// Get the job details elements
var jobDetailsPopup = document.getElementById("jobDetailsPopup");
var jobTitlePopup = document.getElementById("jobTitlePopup");
var companyNamePopup = document.getElementById("companyNamePopup");
var companyDescriptionPopup = document.getElementById("companyDescriptionPopup");
var locationPopup = document.getElementById("locationPopup");
var jobDescriptionPopup = document.getElementById("jobDescriptionPopup");
var companyEmailPopup = document.getElementById("companyEmailPopup");
var timestampPopup = document.getElementById("timestampPopup");

// Function to show job details in a popup
function showJobDetailsPopup(index) {
    var jobListing = jobListings[index];
    jobTitlePopup.textContent = `Job Title: ${jobListing.title}`;
    companyNamePopup.textContent = `Company: ${jobListing.company}`;
    companyDescriptionPopup.textContent = `Company Description: ${jobListing.codescription}`;
    locationPopup.textContent = `Location: ${jobListing.joblocation}`;
    jobDescriptionPopup.textContent = `Description: ${jobListing.description}`;
    companyEmailPopup.textContent = `Company Email: ${jobListing.email}`;
    timestampPopup.textContent = `Date Added: ${jobListing.timestamp}`;

    // Display the job details popup
    jobDetailsPopup.style.display = "block";
}

// Function to close the job details popup
function closePopup() {
    jobDetailsPopup.style.display = "none";
}

// Loop through sorted job listings and add job titles to the UL element
for (var i = 0; i < jobListings.length; i++) {
    var jobListing = jobListings[i];
    var listItem = document.createElement("li");
    listItem.textContent = `Job Title: ${jobListing.title}`;

    // Add a click event listener to each job title
    listItem.addEventListener("click", function(event) {
        var index = Array.from(jobListingsUl.children).indexOf(event.target);
        showJobDetailsPopup(index);
    });

    jobListingsUl.appendChild(listItem);
}
