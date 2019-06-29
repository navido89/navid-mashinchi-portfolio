const nodemailer = require('nodemailer');

module.exports = {
    index(req, res, next){
      res.render("static/contact");
    },

    emailSent(req, res, next){
        let mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          },
          tls:{
              rejectUnauthorized:false
          }
        });
        mailOpts = {
          from: req.body.name + ' &lt;' + req.body.email + '&gt;',
          to: process.env.GMAIL_USER,
          subject: 'New message from contact form from my portfolio website',
          text: `${req.body.name} (${req.body.phone}) (${req.body.email}) says: ${req.body.message}`,
          replyTo: req.body.email,

        };
        smtpTrans.sendMail(mailOpts, function (error, response) {
          if (error) {
            console.log(error);
            req.flash("error")
          }
          else {
            req.flash("notice", "sucess");
            res.render('static/contact');
          }
        });


    },
  }