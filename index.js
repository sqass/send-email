const nodemailer = require("nodemailer")
const path = require("path")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user : 'bhargavjulaganti@gmail.com',
        pass: 'unyh vgof ugha gzis'
    }   
})

const mailoptions = {
    from: {
        name: 'from node',
        address : 'bhargavjulaganti@gmail.com'
    },
    to: ["bhargavjulaganti@hotmail.com"],
    subject: "Send email from subject",
    text: "Hello world",
    html: "",
    attachments :[
        {
            filename: 'sample.png',
            path: path.join(__dirname, 'sample.png'),
            contentType: 'image/jpg'
        }
    ]
}

const sendEmail = async (transporter, mailoptions) => {
    try {
        await transporter.sendMail(mailoptions);
    } catch (error) {
        console.error(error);
    }
}

sendEmail(transporter, mailoptions);