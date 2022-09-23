const express = require("express");
const app = express();
const path= require("path");
const hbs = require("hbs");
const port = process.env.PORT ||  3000;

// Public static path
const static_Path = path.join(__dirname, "../public");
const template_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

app.set("view engine", 'hbs');
app.set('views', template_Path);
hbs.registerPartials(partials_Path);

app.use(express.static(static_Path));



app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: 'Opps! Page NOt Found'
    });
});

app.listen(port, ()  =>  {
    console.log(`Listening to the port no. ${port}`);
});