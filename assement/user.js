
const professional=require('./professionalsData')
class User{
constructor(userId,userName,userpassword,adminName,adminPassword){
this.userId=userId;
this.userName=userName;
this.userpassword=userpassword;
this.adminName="ADMIN";
this.adminPassword="ADMIN";
}
 checkingAdmin(password){
    if(password===this.adminPassword){
        console.log('login successfull')
        professional.addprofessional();

return true;
    }else{console.log("incorrect password")}
return false;
}


}


var user=new User()
module.exports=user