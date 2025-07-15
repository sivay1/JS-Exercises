let lastPostId = 0;

function checkForNewPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      const latestPost = posts[posts.length - 1];

      if (latestPost.id > lastPostId) {
        notifyNewPost(latestPost);
        lastPostId = latestPost.id;
      }

      // Poll again after 5 seconds
      setTimeout(checkForNewPosts, 5000);
    })
    .catch(err => {
      console.error("Polling error:", err);
      setTimeout(checkForNewPosts, 5000); // Try again later
    });
}

function notifyNewPost(post) {
  const note = document.getElementById("notification");
  note.style.display = "block";
  note.innerText = `🆕 New Post: ${post.title}`;
}

checkForNewPosts();
