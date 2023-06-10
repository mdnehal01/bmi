let express = require('express');
let bodyParser = require('body-parser');
let bmi = 0;
let app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.render('index', {calculatedBmi:bmi});
});

app.post("/", function(req, res){
    
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    bmi = weight/(height*height);

    res.redirect("/bmi")
})

app.get("/bmi", function(req,res){
    res.render('answer', {calculatedBmi:bmi});
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server on port 3000");
});