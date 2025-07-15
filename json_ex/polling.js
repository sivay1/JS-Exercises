// function pollServer() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Got data:", data);
//     })
//     .catch((error) => {
//       console.error("Polling error:", error);
//     });
// }

// // Poll every 5 seconds
// setInterval(pollServer, 5000);


//Recursive method

function poll() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Poll again after 5 seconds
      setTimeout(poll, 5000);
    });
}

poll();
