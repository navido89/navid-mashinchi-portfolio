module.exports = {
    index(req, res, next){
      res.render("static/landing", {title: "Welcome to Bloccit"});
    }
  }