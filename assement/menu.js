
readline = require('readline-sync')
var role= require('./role')
 var obj= new  role();
class Menu{
    constructor(){

    }
     menu(){
    let userInput= readline.question("Enter The Option\n1 Admin\n2 User")

    switch (userInput) {
        case "1":
            obj.checkingUserType("ADMIN");
            
            break;
            case "2":
            
                break;

        default:"wrong Input"
            break;
    }


}

};
// new Menu().menu();
module.exports=Menu;