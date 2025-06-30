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
    
    if(name && name.trim() !== "" && rating && comments) {
        uniqueUsers.add(name);
        feedbackArray.push({username:name, rating:rating, comments:comments}); 
        ratingCount.set(rating, ratingCount.get(rating) ? ratingCount.get(rating) + 1 : 1);
        updateStats();
        filterFeedback();
    } else {
        console.log("Please provide valid feedback.");
    }
    
    const arrayValues = feedbackArray.map((item) =>{
        return `<li>${item.username} : ${item.rating} : ${item.comments}`;
    });
resultContainer.innerHTML=`<ul>${arrayValues.join("")}</ul>`;

    
}

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

    filterSelect.innerHTML = `<ul>${filteredOutput.join("")}</ul>`;
}

window.submitFeedback = submitFeedback;