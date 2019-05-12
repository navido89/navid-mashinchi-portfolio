module.exports = {
    init(app){
      const staticRoutes = require("../routes/landing");
      app.use(staticRoutes);
    }
  }