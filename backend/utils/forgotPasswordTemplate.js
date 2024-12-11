const forgotPasswordTemplate = ({ name, otp}) =>{
    return`
    <div>
       <p>Dear, ${name}</p>
       <p>You're requested a password reset. Please use following OTP code to
       reset your password.</p>
       <div style = "background:red; font-size:20px; padding:10px; text-align:center; font-weight:800;">
            ${otp}
       </div>
       <p>This otp is valid for 1hour only.
       Enter this otp in the myntra website to proceed
       with resetting your password.</p>
       <br />
       </br>
       <p>Thanks </p>
       <p>Myntra</p>
    
    
    </div>    
    `
}
module.exports = forgotPasswordTemplate;