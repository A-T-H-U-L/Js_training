const readline = require('readline-sync')
const filesystem = require('fs')
const professional = require('./professionalsData')


class User  {
 
    constructor(userId, userName, userpassword, adminName, adminPassword) {
        // super(professionalsName, locality, experience, specialty)
        this.userId = userId;
        this.userName = userName;
        this.userpassword = userpassword;
        this.adminName = "ADMIN";
        this.adminPassword = "ADMIN";
    }
    checkingAdmin(password) {
        if (password === this.adminPassword) {
            console.log('login successfull')
            return true;
        } else { console.log("incorrect password") }
        return false;
    }


}


var user = new User()
module.exports = user