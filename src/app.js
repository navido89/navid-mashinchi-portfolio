const express = require("express");
const app = express();
const appConfig = require("./config/main-config.js");

appConfig.init(app, express);
const routeConfig = require("./config/route-config.js");

 routeConfig.init(app, express);


module.exports = app;