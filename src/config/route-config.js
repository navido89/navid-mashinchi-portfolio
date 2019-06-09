module.exports = {
    init(app){
      const landingRoutes = require("../routes/landing");
      const aboutRoutes = require("../routes/about");
      const skillsRoutes = require("../routes/skills");
      const workRoutes = require("../routes/work");
      app.use(workRoutes);
      app.use(landingRoutes);
      app.use(aboutRoutes);
      app.use(skillsRoutes);
    }
  }