const nodemailer = require( 'nodemailer' );
require('dotenv').config()
exports.sendEvent = async (req,res) =>
{
    try
    {
       
        let transporter = nodemailer.createTransport( {
            service: "outlook",
        
            auth: {
                user: process.env.EMAIL_USERNAME, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
        } );
        
        let message = {
            from: 'rachaelmuthoni50@outlook.com',
            to: 'nicholas.guantai@thejitu.com',
            subject: 'Nodemailer Assignment',
            text: 'Please see the attached appointment',
            icalEvent: {
                filename: 'myevents.ics',
                method: 'PUBLISH',
                path:'C:/Users/HP/Downloads/myevents.ics'
    
            }
        }
        transporter.sendMail( message, ( error, info ) =>
        {
            if ( error )
                console.log( error )
            res.send(info)
        });
    }
    catch (error) {
        console.log(error)
    }
}
