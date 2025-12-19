import { contactFormSchema } from "@/features/contact/helpers/validations";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input using Zod schema
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const errorMessage = result.error.issues
        .map((issue) => issue.message)
        .join(", ");
      console.error("❌ Validation error:", errorMessage);
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    const { email, message, name } = result.data;

    // console.log("📧 Sending contact form submission:", { name, email });

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@hiretimsf.com>",
      to: process.env.CONTACT_EMAIL || "hiretimsf@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend API error:", error);
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
          details: error.message,
        },
        { status: 500 },
      );
    }

    // console.log("✅ Email sent successfully:", data);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      data,
    });
  } catch (error) {
    console.error("❌ Unexpected error in contact form:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
