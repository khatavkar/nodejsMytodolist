let express = require('express');

let app = express();

app.get('/',function(req,res){
    res.end("Welcome to to do list");
})

app.get('/todo',function(req,res){
    

})
let todolist = ['I have to go to angular class','I need to iron to cloths','water the plants'];
app.get('/:name',function(req ,res){
    res.render('mytodo.ejs',{name : req.params.name,todolist : todolist});
});

app.listen(8081);