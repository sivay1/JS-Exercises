class Register{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    userName(){
        return "Name: " + this.name;
    }

}

user1 = new Register('John Doe', 'email@l.com', 'password123');
user2 = new Register('John', 'ema', 'ppass');
console.log(user1); // Output: John Doe
console.log(user2.userName()); // Output: John
console.log();