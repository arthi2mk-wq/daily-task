const nodemailer = require("nodemailer");
console.log("Creating SMTP transporter client...");
async function main() {
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465,              
    secure: true,              
    connectionTimeout: 10000, 
    greetingTimeout: 10000,  
    auth: {
      user: "arthis.p11b@gmail.com", 
      pass: "mtwiwqxbqnpgjhhz", 
    },
      tls: {
    rejectUnauthorized: false
  }
  });

  const mailOptions = {

    from: 'arthis.p11b@gmail.com', 
    to: "arthi2mk@gmail.com",                     
    subject: "Testing Nodemailer",                
    text: "Hello! This is a plain text email.",     
    html: "<b>Hello!</b> This is an HTML email. Hello Arthi",   
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

main();