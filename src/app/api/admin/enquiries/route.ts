import { NextResponse } from "next/server";
import { getCurrentAdminUser } from "@/lib/auth";
import { getStoredEnquiries, createStoredEnquiry } from "@/lib/server/storage";

export async function GET() {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const enquiries = getStoredEnquiries();
  return NextResponse.json(enquiries);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const saved = createStoredEnquiry(data);
    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry." },
      { status: 500 }
    );
  }
}
