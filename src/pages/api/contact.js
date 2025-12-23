import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create transporter (using Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Usama Zia: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <div style="background-color: #6B46C1; color: white; padding: 20px 30px;">
        <h1 style="margin: 0; font-size: 24px;">📬 New Contact Message</h1>
      </div>
      <div style="padding: 30px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #6B46C1;">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f1f1f1; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap;">
          ${message}
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eaeaea;">
        <p style="font-size: 12px; color: #999;">This message was sent via Usama Zia’s portfolio contact form.</p>
      </div>
    </div>
  </div>
`,
    };

 
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending message" });
  }
}
