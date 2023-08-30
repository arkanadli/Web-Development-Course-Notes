const nodemailer = require("nodemailer");
async function main() {
   const testAccount = await nodemailer.createTestAccount();
   const transporter = nodemailer.createTransport({
      host: "smtp.telkom.net",
      port: 25,
      secure: false, // true for 465, false for other ports

   });
   await transporter.sendMail({
      from: 'uzzomaki@gmail.com', // sender address
      to: "uzzomaki@gmail.com, muhammad.arkan@mhs.itenas.ac.id", // list of receivers
      subject: "Helloooo", // Subject line
      text: "Hello world", // plain text body
      html: "<b>Hello world?</b>", // html body
   });
}
main().catch(console.error);