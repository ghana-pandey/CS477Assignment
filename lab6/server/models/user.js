const users=[]
module.exports = class User {
    constructor(id,username,password,email,role) {
        this.id = id;
        
        this.username = username;
        this.password = password;
        this.email = email;
        this.role=role;
    }
    addUser() {
        const foundUser = users.find((data) => this.username === data.username);
        if (!foundUser) {
            this.id = Math.random().toString();
            users.push(this) 
            return this;
            
        }
    


    }
    login(){
        return users.find(u => this.username === u.username && this.password===u.password);
        

    }
    
    
}