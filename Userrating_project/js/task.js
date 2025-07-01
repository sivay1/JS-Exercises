import {
  feedbackArray,
  uniqueUsers,
  ratingCount,
  name,
  rating,
  comments,
  resultContainer,
  statsContainer,
  filterSelect
} from "./constants.js";


function submitFeedback() {
    // Get the actual values from the DOM elements
    const userName = name.value;
    const userRating = parseInt(rating.value);
    const userComments = comments.value;

    if(userRating && userComments && userName && userName.trim() !== "") {
        const normalizedUserName = userName.trim().toLowerCase();
        uniqueUsers.add(normalizedUserName);
        
        feedbackArray.push({username: userName, rating: userRating, comments: userComments}); 
        ratingCount.set(userRating, ratingCount.get(userRating) ? ratingCount.get(userRating) + 1 : 1);
        updateStats();
        filterFeedback();
    } 
    else {
        console.log("Please provide valid feedback.");
    }

    const arrayValues = feedbackArray.map((item) =>{
        return `<li>${item.username} : ${item.rating} : ${item.comments}</li>`;
    });
    resultContainer.innerHTML=`<ul>${arrayValues.join("")}</ul>`;

    
}
// Make submitFeedback globally accessible
window.submitFeedback = submitFeedback;
window.filterFeedback = filterFeedback;
window.updateStats = updateStats;

function updateStats(){
    let ratingOutput = "Ratings:<br>";
    for (let [key, value] of ratingCount.entries()) {
    ratingOutput += `★ ${key}: ${value} users<br>`;
    }
    statsContainer.innerHTML=`Total Feedback: ${feedbackArray.length} <br> Unique Users: ${uniqueUsers.size} <br> ${ratingOutput}`;

}

function filterFeedback() {
    const selected = document.getElementById("filter").value;

    let filtered = feedbackArray;

    if (selected !== "all") {
        const selectedRating = parseInt(selected);
        filtered = feedbackArray.filter(item => item.rating === selectedRating);
    }

    const filteredOutput = filtered.map(item => {
        return `<li>${item.username} : ${item.rating} : ${item.comments}</li>`;
    });

    resultContainer.innerHTML = `<ul>${filteredOutput.join("")}</ul>`;
}


// Ensure the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission if inside a form
            submitFeedback();
        });
    }
});