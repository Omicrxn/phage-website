const nodemailer = require("nodemailer");
require("dotenv").config;
export default function (req, res) {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL,
      to: "alex01avilarodriguez@gmail.com",
      subject: `Message From ${name}`,
      text: message + name + email,
      html: `<h3>
        Sent From: ${email}
      </h3>
      <h3>Client Name: ${name}</h3>
      <h3>Message:</h3>
      <div>${message}</div>`
    };
    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ name: "error" + JSON.stringify(err)})
      } else {
        console.log("mail sent");
        res.status(200).json({ name: "success"})
      }
    });
    res.status(200)
    console.log(req.body);

}
