const read=require('readline-sync')
const sql=require('mysql');
let productId;
let productName;
let price;
let qry;

var con = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
   // database:""// mention respective database
});
function connectionAndCreation(){
//connection with database
con.connect(function(err){
    if (err) throw err
    console.log("connected")
 })
 qry="drop database ecom;"
 con.query(qry,function(err,result){
     if(err)throw err;
     console.log("database droped")
 })
 qry="create database ecom;"
 con.query(qry,function(err,result){
     if(err)throw err;
     console.log("database created")
 })
 //table creation
 qry="create table ecom.product (productId int NOT NULL,productName varchar(255) NOT NULL,price int,PRIMARY KEY(productId));"
con.query(qry,function(err,result){
    if(err)throw err;
    console.log("Table created")
})}

function addproduct(productId,productName,price){
 //insert into table
  qry="insert into table ecom.product (productId int NOT NULL,productName varchar(255) NOT NULL,price int NOT NULL,PRIMARY KEY(productId int));"
 con.query(qry,function(err,result){
     if(err)throw err;
     console.log("Inserted into table")
     
 })

}
// var productId;
// var x=addproduct();

productId=read.question('Enter the product Id :')
productName=read.question('Enter the product Name :')
price=read.question('Enter the price :')

connectionAndCreation();
addproduct(productId,productName,price);
// a(x);