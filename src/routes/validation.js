module.exports = {
    validateForm(req, res, next) {
  
  
      if(req.method === "POST") {
  
  
        
        req.checkBody("name", "must be at least 2 characters in length and can not be empty").isLength({min: 2}).notEmpty();
        req.checkBody("phone", "must be valid").isMobilePhone("any");
        req.checkBody("email", "must be valid").isEmail();
      }
  
  
      const errors = req.validationErrors();
  
      if (errors) {
  
  
        req.flash("error", errors);
        return res.redirect(303, req.headers.referer)
      } else {
        return next();
      }
    }
  }