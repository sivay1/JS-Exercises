// async function getData() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     //const userName = json[0].name;
//     //console.log(userName);

//     for(const user of json){
//         console.log("city: " ,user.address.city);
//         console.log("name: " ,user.name);
//     }
//     //console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// getData()


//BEST PRACTICE FOR ABOVE CODE

async function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return response.json();
}

function printUserCities(users) {
  users.forEach(user => {
    console.log("City:", user.address.city);
  });
}

async function getData() {
  try {
    const users = await fetchUsers();
    printUserCities(users);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
getData();
