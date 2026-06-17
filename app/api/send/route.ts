import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailLayout(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Fitlabreviews</title>
</head>
<body style="margin:0;padding:0;background-color:#F2EBD9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F2EBD9;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

<!-- Header -->
<tr><td style="background-color:#1A1714;padding:28px 32px;border-radius:12px 12px 0 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <span style="font-size:22px;font-weight:700;color:#F2EBD9;letter-spacing:-0.02em;">Fitlab</span><span style="font-size:22px;font-weight:700;color:#C4622D;letter-spacing:-0.02em;">reviews</span>
    </td>
    <td align="right">
      <span style="font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#8A8480;">Evidence-Led Reviews</span>
    </td>
  </tr>
  </table>
</td></tr>

<!-- Body -->
<tr><td style="background-color:#FFFFFF;padding:36px 32px;">
  ${content}
</td></tr>

<!-- Footer -->
<tr><td style="background-color:#FAFAF7;padding:24px 32px;border-top:1px solid #E8E2D6;border-radius:0 0 12px 12px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr><td style="font-size:12px;color:#8A8480;line-height:1.5;">
    <p style="margin:0 0 8px 0;"><a href="https://fitlabreviews.com" style="color:#C4622D;text-decoration:none;font-weight:600;">fitlabreviews.com</a></p>
    <p style="margin:0;color:#B0A99F;">Research-grade supplement reviews. No bias, no fluff.</p>
  </td></tr>
  </table>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function contactNotificationEmail(name: string, email: string, subject: string, message: string) {
  return emailLayout(`
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#C4622D;font-weight:600;">New Contact Message</p>
    <h1 style="margin:0 0 24px 0;font-size:22px;font-weight:700;color:#1A1714;line-height:1.3;">${escapeHtml(subject)}</h1>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;background-color:#F8F5EE;border-radius:8px;border:1px solid #E8E2D6;">
    <tr>
      <td style="padding:16px 20px;">
        <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8A8480;">From</p>
        <p style="margin:0;font-size:15px;color:#1A1714;font-weight:600;">${escapeHtml(name)}</p>
        <p style="margin:4px 0 0 0;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#C4622D;text-decoration:none;">${escapeHtml(email)}</a></p>
      </td>
    </tr>
    </table>

    <div style="font-size:15px;color:#3D3A36;line-height:1.7;">
      ${escapeHtml(message).replace(/\n/g, "<br/>")}
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
    <tr><td style="background-color:#1A1714;border-radius:8px;">
      <a href="mailto:${escapeHtml(email)}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;padding:12px 28px;color:#F2EBD9;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:0.02em;">Reply to ${escapeHtml(name.split(" ")[0])}</a>
    </td></tr>
    </table>
  `);
}

function contactConfirmationEmail(name: string) {
  const firstName = escapeHtml(name.split(" ")[0]);
  return emailLayout(`
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#C4622D;font-weight:600;">Message Received</p>
    <h1 style="margin:0 0 20px 0;font-size:22px;font-weight:700;color:#1A1714;line-height:1.3;">Thanks, ${firstName}!</h1>

    <p style="margin:0 0 16px 0;font-size:15px;color:#3D3A36;line-height:1.7;">We received your message and will get back to you within 48 hours.</p>
    <p style="margin:0 0 28px 0;font-size:15px;color:#3D3A36;line-height:1.7;">In the meantime, check out our latest research:</p>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
    <tr><td style="background-color:#1A1714;border-radius:8px;">
      <a href="https://fitlabreviews.com/research" style="display:inline-block;padding:12px 28px;color:#F2EBD9;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:0.02em;">Browse Research</a>
    </td></tr>
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0">
    <tr><td style="border:1px solid #D4C9B8;border-radius:8px;">
      <a href="https://fitlabreviews.com/reviews" style="display:inline-block;padding:12px 28px;color:#1A1714;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:0.02em;">Read Reviews</a>
    </td></tr>
    </table>
  `);
}

function subscriberNotificationEmail(email: string) {
  return emailLayout(`
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#C4622D;font-weight:600;">New Subscriber</p>
    <h1 style="margin:0 0 20px 0;font-size:22px;font-weight:700;color:#1A1714;line-height:1.3;">Newsletter Sign-up</h1>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8F5EE;border-radius:8px;border:1px solid #E8E2D6;">
    <tr><td style="padding:16px 20px;">
      <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8A8480;">Email Address</p>
      <p style="margin:0;font-size:16px;font-weight:600;"><a href="mailto:${escapeHtml(email)}" style="color:#C4622D;text-decoration:none;">${escapeHtml(email)}</a></p>
    </td></tr>
    </table>

    <p style="margin:20px 0 0 0;font-size:13px;color:#8A8480;">Add this subscriber to your mailing list or Resend audience.</p>
  `);
}

function welcomeSubscriberEmail() {
  return emailLayout(`
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#C4622D;font-weight:600;">Welcome</p>
    <h1 style="margin:0 0 20px 0;font-size:22px;font-weight:700;color:#1A1714;line-height:1.3;">You're on the list!</h1>

    <p style="margin:0 0 16px 0;font-size:15px;color:#3D3A36;line-height:1.7;">Thanks for subscribing to Fitlabreviews. You'll get our latest supplement research, reviews, and evidence-based guides — no spam, no fluff.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;background-color:#F8F5EE;border-radius:8px;border:1px solid #E8E2D6;">
    <tr><td style="padding:20px;">
      <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#8A8480;">What to expect</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;">
        <tr>
          <td style="padding:6px 0;font-size:14px;color:#3D3A36;" valign="top">
            <span style="color:#C4622D;font-weight:700;margin-right:8px;">01</span> New product reviews with FSP scoring
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-size:14px;color:#3D3A36;" valign="top">
            <span style="color:#C4622D;font-weight:700;margin-right:8px;">02</span> Deep-dive research articles
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-size:14px;color:#3D3A36;" valign="top">
            <span style="color:#C4622D;font-weight:700;margin-right:8px;">03</span> Ingredient breakdowns backed by clinical data
          </td>
        </tr>
      </table>
    </td></tr>
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0">
    <tr><td style="background-color:#1A1714;border-radius:8px;">
      <a href="https://fitlabreviews.com" style="display:inline-block;padding:12px 28px;color:#F2EBD9;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:0.02em;">Explore Fitlabreviews</a>
    </td></tr>
    </table>
  `);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;
    const resend = getResend();

    if (type === "contact") {
      const { name, email, subject, message } = body;
      if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }

      const safeName = String(name);
      const safeEmail = String(email);
      const safeSubject = String(subject);
      const safeMessage = String(message);

      const [notification, confirmation] = await Promise.all([
        resend.emails.send({
          from: "Fitlabreviews <onboarding@resend.dev>",
          to: "sonusingh.up@yahoo.com",
          subject: `Contact: ${safeSubject}`,
          replyTo: safeEmail,
          html: contactNotificationEmail(safeName, safeEmail, safeSubject, safeMessage),
        }),
        resend.emails.send({
          from: "Fitlabreviews <onboarding@resend.dev>",
          to: safeEmail,
          subject: "We got your message — Fitlabreviews",
          html: contactConfirmationEmail(safeName),
        }),
      ]);

      if (notification.error) {
        return NextResponse.json({ error: notification.error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, id: notification.data?.id, confirmationSent: !confirmation.error });
    }

    if (type === "newsletter") {
      const { email } = body;
      if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
      }

      const safeEmail = String(email);

      const [notification, welcome] = await Promise.all([
        resend.emails.send({
          from: "Fitlabreviews <onboarding@resend.dev>",
          to: "sonusingh.up@yahoo.com",
          subject: "New Newsletter Subscriber",
          html: subscriberNotificationEmail(safeEmail),
        }),
        resend.emails.send({
          from: "Fitlabreviews <onboarding@resend.dev>",
          to: safeEmail,
          subject: "Welcome to Fitlabreviews",
          html: welcomeSubscriberEmail(),
        }),
      ]);

      if (notification.error) {
        return NextResponse.json({ error: notification.error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, id: notification.data?.id, welcomeSent: !welcome.error });
    }

    return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
