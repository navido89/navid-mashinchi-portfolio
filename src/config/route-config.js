module.exports = {
    init(app){
      const landingRoutes = require("../routes/landing");
      const skillsRoutes = require("../routes/skills");
      const projectsRoutes = require("../routes/projects");
      const contactRoutes = require("../routes/contact");
      const blogsRoutes = require("../routes/blogs");
      const testimonialsRoutes = require("../routes/testimonials");


      app.use(blogsRoutes);
      app.use(contactRoutes);
      app.use(projectsRoutes);
      app.use(landingRoutes);
      app.use(skillsRoutes);
      app.use(testimonialsRoutes);
    }
  }