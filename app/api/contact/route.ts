import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("--- CONTACT API TRIGGERED ---");
    
    const body = await req.json();
    const { name, email, message } = body;

    console.log("1. Payload Received:", { name, email, message });

    if (!name || !email || !message) {
      console.error("Error: Missing required fields from frontend.");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const targetEmail = process.env.CONTACT_EMAIL;
    console.log("2. Target Delivery Email:", targetEmail);

    if (!targetEmail) {
      console.error("Error: CONTACT_EMAIL is missing from .env.local");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    console.log("3. Dispatching to Resend...");

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: targetEmail, 
      replyTo: email, 
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("4. Resend API Rejected the Request:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log("4. Email successfully delivered to Resend!", data);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("FATAL CATCH BLOCK ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}