import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate the incoming data
  if (!body.name || !body.email || !body.message) {
    return { status: 400, message: "Invalid input" };
  }

  // Configure the transporter using environment variables for credentials
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER, // Your email address from .env
      pass: process.env.EMAIL_PASS, // Your email password from .env
    },
  });

  // Email options
  const mailOptions = {
    from: `"${body.name}" <${body.email}>`, // Sender address
    to: "ahmed.c.gsm@gmail.com", // Your email address
    subject: "New Contact Form Submission",
    text: body.message, // Plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: 200, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { status: 500, message: "Failed to send email" };
  }
});

