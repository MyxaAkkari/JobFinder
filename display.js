// Get job listings from local storage
var jobListings = JSON.parse(localStorage.getItem("jobListings")) || [];

// Get the UL element where job listings will be displayed
var jobListingsUl = document.getElementById("jobListings");

// Loop through job listings and add them to the UL element
for (var i = 0; i < jobListings.length; i++) {
    var jobListing = jobListings[i];
    var listItem = document.createElement("li");
    listItem.textContent = `Job Title: ${jobListing.title}, Company: ${jobListing.company}, Description: ${jobListing.description}`;
    jobListingsUl.appendChild(listItem);
}
