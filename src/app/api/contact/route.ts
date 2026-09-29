import { NextResponse } from "next/server";
import { createStoredEnquiry } from "@/lib/server/storage";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, company, service, budget, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and project goals message are required." },
        { status: 400 }
      );
    }

    const newEnquiry = createStoredEnquiry({
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully received by our growth team.",
      id: newEnquiry.id,
    });
  } catch (error) {
    console.error("Public contact API error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
