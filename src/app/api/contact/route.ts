import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/api";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, company, website, service, budget, message } = data;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const backendRes = await fetch(`${API_BASE_URL}/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        company: company || website,
        website: website || company,
        service,
        budget,
        message: message || "New inquiry received from website.",
      }),
    });

    const result = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: result.message || "Failed to submit inquiry to backend." },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message || "Your inquiry has been successfully received.",
      data: result.data,
    });
  } catch (error) {
    console.error("Public contact API proxy error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
