const nodemailer = require("nodemailer")
const path = require("path")
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async sendEmail(){

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user : 'joseph.j.defilippo@gmail.com',
                pass: 'inog zxbd nqvc xvah'
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
                    path: path.join(__dirname, 'report.zip')
                }
            ]
        }

        try {
          await transporter.sendMail(mailoptions);
          return null
      } catch (error) {
          console.error(error);
      }





        }
      })
    },
  },
});
