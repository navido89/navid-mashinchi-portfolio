module.exports = {
    init(app){
      const landingRoutes = require("../routes/landing");
      const aboutRoutes = require("../routes/about");
      app.use(landingRoutes);
      app.use(aboutRoutes);
    }
  }