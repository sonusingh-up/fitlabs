import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;

    if (type === "contact") {
      const { name, email, subject, message } = body;
      if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }

      const { data, error } = await resend.emails.send({
        from: "Fitlabreviews <onboarding@resend.dev>",
        to: "sonusingh.up@yahoo.com",
        subject: `Contact: ${subject}`,
        replyTo: email,
        html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
      });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, id: data?.id });
    }

    if (type === "newsletter") {
      const { email } = body;
      if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
      }

      const { data, error } = await resend.emails.send({
        from: "Fitlabreviews <onboarding@resend.dev>",
        to: "sonusingh.up@yahoo.com",
        subject: "New Newsletter Subscriber",
        html: `<p>New subscriber: <strong>${email}</strong></p>`,
      });

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, id: data?.id });
    }

    return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
