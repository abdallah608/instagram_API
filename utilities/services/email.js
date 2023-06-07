import * as dotenv from 'dotenv'
dotenv.config()
import nodemailer from "nodemailer";
import { html } from "./email-verify.js";
import jwt from "jsonwebtoken"


async function sendEmail(email,name) {
 
  let transporter = nodemailer.createTransport({
    service: process.env.service,
    auth: {
      user: `${process.env.Email}`, 
      pass:`${process.env.Password}`,
    },
  });

  let token = jwt.sign({email},process.env.verifyKey)
  
  let info = await transporter.sendMail({
    from: '"Instagram 👻" <abdallahhassanshaaban@gmail.com>', 
    to: email, 
    subject: "Verify Email",
    text: "Verify Email", 
    html: html(token,name)
      });

  console.log("Message sent: %s", info.messageId);

}

export default sendEmail