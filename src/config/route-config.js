module.exports = {
    init(app){
      const landingRoutes = require("../routes/landing");
      app.use(landingRoutes);
    }
  }