module.exports = {
    init(app){
      const landingRoutes = require("../routes/landing");
      const skillsRoutes = require("../routes/skills");
      const workRoutes = require("../routes/work");
      const contactRoutes = require("../routes/contact");
      const blogsRoutes = require("../routes/blogs");

      app.use(blogsRoutes);
      app.use(contactRoutes);
      app.use(workRoutes);
      app.use(landingRoutes);
      app.use(skillsRoutes);
    }
  }