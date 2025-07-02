
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        const list = document.getElementById("postList");
        json.forEach(user => {
            const li = document.createElement("li");
            
            li.textContent = `Name:  ${user.name }`;// Adding name to the list item
            li.textContent += ` Email:  (${user.email})`; // Adding email for more information
            list.appendChild(li);
            
            // console.log(user.name);
        });
    console.log(typeof json);      
    })
    .catch(error => console.error(error));

// This code fetches a list of users from the JSONPlaceholder API and appends their names to a list in the HTML document.
// It uses the Fetch API to make a GET request to the specified URL, converts the response
// to JSON, and then iterates over the array of users to create list items for each user name.