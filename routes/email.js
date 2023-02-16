const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');

async function main(name, email, message){
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'phanvuloi.it@gmail.com', // generated ethereal user
        pass: 'yjkfgmytgdrgrquq', // generated ethereal password
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
  
    const data = {
        from: '"Loi Phan" <phanvuloi1003@gmail.com>', // sender address
        to: "phanvuloi.it@gmail.com", // list of receivers
        subject: "Mail from porfolio", // Subject line
        // text: `From ${name} Email: ${email}Nội dung: ${message}`, // plain text body
        html: `<p>From  <b>${name}</b> Email: <b>${email}</b> <br> Nội dung: ${message}</p>`, // html body
    }


    await transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
          transporter.sendMail(data, function (err, success) {
            if(err) {
                console.log("Err ", err);
                return false;
            } else {
                console.log("success");
                return true;
            }
        });
        }
      });
   
}

// gửi mail
router.post('/send', (req, res) => {
    try {
          main(req.body.name, req.body.email, req.body.message)
          res.status(200).json({message: 'Thành công!'})
    } catch (error) {
        res.status(404).json({message: 'Error'})
    }
})

module.exports = router;
