function add(){

   const firstname= document.getElementById('firstName')
   const lastname= document.getElementById('lastName')
   const account=document.getElementById('account')
   const salary= document.getElementById('salary')
   const project= document.getElementById('project')
   var gender;
   let input=document.querySelectorAll('input')
   input.forEach(value=>{
      console.log(value.value)
   })
   console.log(firstname)
if(document.getElementById('male').checked)   {
   var gender=document.getElementById('male')

}
if(document.getElementById('female'))   {
   var gender=document.getElementById('female')
   
}
if(document.getElementById('others'))   {
   var gender=document.getElementById('other')
   
}
console.log('Name:'+firstname+lastname+"\n" + 'Account:'+account+"\n" + 'Salary:'+salary+"\n" + 'Project:'+project+"\n" +'Gender:'+gender+"\n")



}