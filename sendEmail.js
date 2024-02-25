const nodemailer = require("nodemailer")
const path = require("path")

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user : 'joseph.j.defilippo@gmail.com',
          pass: ''
      }   
  })
  
  const mailoptions = {
      from: {
          name: 'from node',
          address : 'joseph.j.defilippo@gmail.com'
      },
      to: ["joseph.j.defilippo@gmail.com"],
      subject: "Send email from subject",
      text: "Hello world",
      html: "",
      attachments :[
          {
              filename: 'report.zip',
              path: path.join(__dirname, 'report')
          }
      ]
  }

  try {
    transporter.sendMail(mailoptions);
    return null
} catch (error) {
    console.error(error);
}

