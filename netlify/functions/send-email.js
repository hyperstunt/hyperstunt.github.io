import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate the incoming data
  if (!body.name || !body.email || !body.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid input" }),
    };
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // Use environment variables
      pass: process.env.SMTP_PASS, // Use environment variables
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
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", {
      message: error.message,
      stack: error.stack,
    });
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
});
