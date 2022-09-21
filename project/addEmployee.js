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

const form = document.getElementById('form-id');

form.addEventListener('submit', event => {
  event.preventDefault();
  alert('submitting');
  const firstname= document.getElementById('firstname').value
   const lastname= document.getElementById('lastname').value
   const account=document.getElementById('account').value
   const salary= document.getElementById('salary').value
   const project= document.getElementById('project').value
   var gender;
   let input=document.querySelectorAll('input')
   input.forEach(value=>{
      console.log(value.value)
   })
   console.log(firstname)
if(document.getElementById('male').checked)   {
   var gender='male'

}
if(document.getElementById('female').checked)   {
   var gender='female'
   
}
if(document.getElementById('others').checked)   {
   var gender='others'
}
console.log('Name:'+firstname+lastname+"\n" + 'Account:'+account+"\n" + 'Salary:'+salary+"\n" + 'Project:'+project+"\n" +'Gender:'+gender+"\n")
});