import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, selectedServices, budget, challenge } = body;

    if (!name || !email || !challenge) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const servicesText = selectedServices?.length
      ? selectedServices.join(", ")
      : "Not specified";

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f4f4f5; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #6366f1, #4f46e5); padding: 28px 32px;">
          <h1 style="margin: 0; font-size: 22px; color: #ffffff;">New Consultation Request</h1>
          <p style="margin: 6px 0 0; color: rgba(255,255,255,0.75); font-size: 14px;">AutomateUs Contact Form</p>
        </div>

        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #f4f4f5; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #f4f4f5; font-size: 14px;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #818cf8; font-size: 14px;"><a href="mailto:${email}" style="color: #818cf8;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #f4f4f5; font-size: 14px;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Services</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #f4f4f5; font-size: 14px;">${servicesText}</td>
            </tr>
            ${budget ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #34d399; font-size: 14px; font-weight: 600;">${budget}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">Automation Challenge</p>
            <div style="background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); border-radius: 8px; padding: 16px;">
              <p style="color: #f4f4f5; font-size: 14px; line-height: 1.7; margin: 0;">${challenge.replace(/\n/g, "<br>")}</p>
            </div>
          </div>

          <div style="margin-top: 28px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.07);">
            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #4f46e5); color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600;">Reply to ${name}</a>
          </div>
        </div>

        <div style="padding: 20px 32px; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.06);">
          <p style="margin: 0; color: #3f3f46; font-size: 12px;">Sent from the AutomateUs contact form · automate-us.vercel.app</p>
        </div>
      </div>
    `;

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 32px; color: #111;">
        <p style="font-size: 16px; margin: 0 0 16px;">Hi ${name},</p>
        <p style="font-size: 15px; color: #444; line-height: 1.7; margin: 0 0 16px;">
          Thanks for reaching out. We've received your message and will get back to you within 1 business day.
        </p>
        <p style="font-size: 15px; color: #444; line-height: 1.7; margin: 0 0 32px;">
          Talk soon,<br/>
          <strong>Ali Hassan</strong><br/>
          AutomateUs
        </p>
        <p style="font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 16px; margin: 0;">
          automate-us.vercel.app
        </p>
      </div>
    `;

    // Send both emails in parallel
    await Promise.all([
      // Notification to you
      transporter.sendMail({
        from: `"AutomateUs Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_NOTIFICATION_EMAIL,
        replyTo: email,
        subject: `New consultation request from ${name}${company ? ` · ${company}` : ""}`,
        html,
      }),
      // Confirmation to the submitter
      transporter.sendMail({
        from: `"AutomateUs" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `We received your request, ${name} — AutomateUs`,
        html: confirmationHtml,
      }),
    ]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
