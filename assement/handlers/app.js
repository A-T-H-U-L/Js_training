const express =require('express');
const app=express();
const port=3000;
 const handlebars=require('express-handlebars');
 app.set('view engine','Handlebars');
 app.engine('handlebars',handlebars.engine({
    extname:'handlebars',
    layoutsDir:__dirname+'/views/layout',
    partialsDir: __dirname + '/views/partials'
 }))
app.use(express.static('public'))
app.get('/',(req,res)=>{
    // res.send('index')
    res.render('main',{layout:'index'})
})
app.listen(port,()=>{
console.log(`App listening to port ${port}`)

});