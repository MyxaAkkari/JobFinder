<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validate and sanitize form data
    $jobTitle = filter_var($_POST["jobTitle"], FILTER_SANITIZE_STRING);
    $companyName = filter_var($_POST["companyName"], FILTER_SANITIZE_STRING);
    $jobDescription = filter_var($_POST["jobDescription"], FILTER_SANITIZE_STRING);

    // Store the job listing data (e.g., in a text file)
    $data = "Job Title: $jobTitle\nCompany Name: $companyName\nDescription: $jobDescription\n\n";
    file_put_contents("job_listings.txt", $data, FILE_APPEND | LOCK_EX);
}
header("Location: lookingfj.html"); // Redirect back to the form page
?>
