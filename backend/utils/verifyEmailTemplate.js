// this is sample template to verifying email

const verifyEmailTemplate = ({name, url}) => {
    return`
    <p>Dear ${name}</p>
    <p>Thank You for registering Myntra.</p>
    <a href = ${url} style = "color: white; background : orange; margin-top: 10px, padding: 20px, display: block ">
       Verify Email  
    </a>
    `
}

module.exports = verifyEmailTemplate;
