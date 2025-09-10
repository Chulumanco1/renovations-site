import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <h2>New message from Ntakezulu Trading site</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Website enquiry from ${name}`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
