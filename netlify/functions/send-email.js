import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate the incoming data
  if (!body.name || !body.email || !body.message) {
    return { status: 400, message: "Invalid input" };
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ahmedgharo@gmail.com",
      pass: process.env.EMAIL_PASS, // Remember to store credentials securely
    },
  });

  // Email options
  const mailOptions = {
    from: `"${body.name}" <${body.email}>`,
    to: "ahmed.c.gsm@gmail.com",
    subject: "New Contact Form Submission",
    text: body.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }), // Ensure proper JSON response
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }), // Ensure proper JSON response
    };
  }
});
