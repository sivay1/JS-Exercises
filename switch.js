function getUserrole(role){
    switch(role){
        case "Admin":
            return "Admin logged in..";
            break;
        case "User":
            return "User logged in..";
            break;
        case "Guest":
            return "Guest"
            break;
        default:
            return "anonymous"
    }
}
console.log(getUserrole("User"));
console.log(getUserrole("Admin"));
console.log(getUserrole("Guest"));
// console.log(getUserrole());