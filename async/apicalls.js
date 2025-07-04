const callApi = async () => {
    try{
        const cachedUsers = localStorage.getItem("cachedUsers");
        const cachedPosts = localStorage.getItem("cachedPosts");
        let userData;
        let postData;
        if (cachedUsers && cachedPosts) {
            // Step 2: Use cached data if available
            console.log("Using cached data");
            userData = JSON.parse(cachedUsers);
            postData = JSON.parse(cachedPosts);
        }
        
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users'
        //     ,{
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json"
        //     }
        // }
    );
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')

        const [userRes, postRes] = await Promise.all([userResponse, postsResponse]);
        userData = await userRes.json();
        postData = await postRes.json();
        
        localStorage.setItem("cachedUsers", JSON.stringify(userData));
        localStorage.setItem("cachedPosts", JSON.stringify(postData));
        
        // const data = await userResponse.json();
        console.log(userData[0].name); //output is array of objects
        console.log(postData[0].title);
        for (const user of userData){
            console.log("User names: ", user.name);
        }
} 
    catch(err){
        console.error("Error fetching data:", err);
    }
}
callApi();