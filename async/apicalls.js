const callApi = async () => {
    try{
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
        const userData = await userRes.json();
        const postData = await postRes.json();
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