module.exports = {
    init(app){
      const landingRoutes = require("../routes/landing");
      const aboutRoutes = require("../routes/about");
      const skillsRoutes = require("../routes/skills");
      app.use(landingRoutes);
      app.use(aboutRoutes);
      app.use(skillsRoutes);
    }
  }