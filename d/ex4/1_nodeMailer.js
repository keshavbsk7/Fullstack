const mailer = require('nodemailer');

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rajdharun2004@gmail.com',
        pass: 'xhuc wepu xyty znvb'
    }
});

let mailOptions = {
    from: 'rajdharun2004@gmail.com',
    to: 'rajdharun2004_bai25@mepcoeng.ac.in',
    subject: 'Test mail',
    text: 'This is a mail from node js by nodemailer'
};

transporter.sendMail(mailOptions, (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log('Email sent successfully!\nMessage sent: %s',data.messageId)
    }
});