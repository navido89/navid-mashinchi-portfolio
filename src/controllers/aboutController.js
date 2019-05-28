module.exports = {
    index(req, res, next){
      res.render("static/about", {title: "Hi I am Navid"});
    }
  }