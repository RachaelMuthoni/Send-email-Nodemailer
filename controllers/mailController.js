const nodemailer = require( 'nodemailer' );
require('dotenv').config()
exports.sendEmail = async ( req, res ) =>
{
    try {
        let transporter = nodemailer.createTransport( {
            host: "smtp.outlook.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USERNAME, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
        } );

        let message = {
            from: 'rachaelmuthoni50@outlook.com', // sender address
            to: "muthonirachael50@gmail.com", // list of receivers
            subject: "Sending files", // Subject line
            text: "Hello, have a look at these files", // plain text body
            attachments: [
                {   // utf-8 string as an attachment
                    filename: 'text1.txt',
                    content: 'hello world!'
                },
                {   // file on disk as an attachment
                    filename: 'Assignment1.pdf',
                    path: 'C:/Users/HP/NODEMAILER/Assignment1.pdf' // stream this file
                },
            ],
        }

        transporter.sendMail( message, ( error, info ) =>
        {
            if ( error )
                console.log( error )
            res.send(info)
        });

    } catch (error) {
        console.log(error)
    }
}
