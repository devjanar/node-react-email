const nodemailer = require('nodemailer');
module.exports =  {
    sendEmail:async function (req,res,next) {
        try {
            if (req.body &&
                req.body.from &&
                req.body.password &&
                req.body.to &&
                req.body.to.length &&
                req.body.subject &&
                req.body.body &&
                req.body.selectedOption) {
                'use strict';

                if (req.body.selectedOption == 'Gmail') {
                    let transporter = nodemailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,
                        auth: {
                            user: req.body.from,
                            pass: req.body.password
                        }
                    });

                    let info = await transporter.sendMail({
                        from: req.body.from,
                        to: req.body.to,
                        subject: req.body.subject,
                        html: req.body.body
                    });
                    res.status(200).json("Email has been sent")
                }
                else if (req.body.selectedOption == 'Outlook') {
                    let transporter = nodemailer.createTransport({
                        host: "smtp-mail.outlook.com",
                        secureConnection: false,
                        port: 587,
                        tls: {
                            ciphers: 'SSLv3'
                        },
                        auth: {
                            user: req.body.from,
                            pass: req.body.password
                        }
                    });

                    let info = await transporter.sendMail({
                        from: req.body.from,
                        to: req.body.to,
                        subject: req.body.subject,
                        html: req.body.body
                    });
                    res.status(200).json("Email has been sent")
                }
                else {
                    res.status(400).json("Email provider dose not selected")
                }
            } else {
                res.status(400).json("All field required")
            }

        } catch (err) {
            res.status(400).json("Server Error")
        }

    }
};
