const { Resend } = require("resend");
const dotenv = require('dotenv').config();

if(!process.env.RESEND_API){
    console.log("Provide RESEND_API in side the .env file")
}

const resendInstance = new Resend(process.env.RESEND_API);

const sendEmail = async({sendTo, subject, html}) => {
    try {
        const { data, error } = await resendInstance.emails.send({
            from: 'Myntra <onboarding@resend.dev>',
            to: sendTo,
            subject: subject,
            html: html,
          });

          if (error) {
            return console.error({ error });
          }

          return data
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = sendEmail;


