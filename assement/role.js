
const user = require('./user')
const readline = require('readline-sync')
class Role {
    constructor(usertype) {
        this.usertype = usertype;
    }

    checkingUserType(UserInput) {
        let result ;
        if (UserInput == "ADMIN") {
           let adminPassword=readline.question("Enter the password:")
            user.checkingAdmin(adminPassword);
            result = "ADMIN"
        }
        else if (UserInput === "USER") {
            result = "USER"
        }
        return result;
    }

}

module.exports = Role;