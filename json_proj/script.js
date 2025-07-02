

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        submitFeedback();
        form.reset(); // Reset the form after submission
    });

});


function submitFeedback(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const feedback = {
            name: name,
            email:email,
            message: message
        };
        let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

  // STEP 2: Add new feedback to the list
        feedbackList.push(feedback);

  // STEP 3: Save updated list back to localStorage
        localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

        alert("Feedback submitted and saved in localStorage!");
        console.log('Feedback submitted:' , feedback);   
    }   
}