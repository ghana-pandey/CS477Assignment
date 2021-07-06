
class User{
    constructor(userName,password,role){
        this.userName=userName;
        this.password=password;
        this.role=role;

    }
    login(){
        return users.find(u=>u.userName===this.userName && u.password===this.password)
    }
}

const users=[new User('john','pass','admin'),new User("ram","123","user")]
module.exports=User;