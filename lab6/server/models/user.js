const getDb = require('../../utils/database').getDb;
//const users = []
module.exports = class User {
    constructor(id, username, password, email, role) {
        this._id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
    async addUser() {

        const count = await getDb().collection('users').countDocuments({ username: this.username })
        console.log(count)
        if (count === 0)
            return getDb().collection('users').insertOne(this);



    }

    // const foundUser = users.find((data) => this.username === data.username);
    // if (!foundUser) {
    //     this.id = Math.random().toString();
    //     users.push(this)
    //     return this;





    //}
    login() {
       return getDb().collection('users').findOne({ username:this.username,password:this.password})


    }


}