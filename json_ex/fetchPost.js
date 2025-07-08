async function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url,{
    method: "POST",
    headers: {
    "Content-Type":"application/json",
    },
    body: JSON.stringify({ 
        title:"Sivavignesh",
        body: "Hello, this is a test post.",
        userId: 1
     }),
  });

  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return response.json(),response.status;
}

async function postData() {
  try {
    const post = await fetchUsers();
    console.log("New post created:", post);
    
  } catch (err) {
    console.error("Error:", err.message);
  }
}
postData();