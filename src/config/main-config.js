require("dotenv").config();
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require('body-parser');
const session = require("express-session");
const flash = require("express-flash");
const expressValidator = require("express-validator");





module.exports = {
    init(app, express){
        app.set("views", viewsFolder);
        app.set("view engine", "ejs");
        app.use(express.static(path.join(__dirname, "..", "assets")));
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        app.use(session({
            secret: process.env.cookieSecret,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 }
          }));
        app.use(flash());
        app.use(expressValidator());




    }
};