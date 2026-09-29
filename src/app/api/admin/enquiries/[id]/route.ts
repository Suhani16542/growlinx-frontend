import { NextResponse } from "next/server";
import { getCurrentAdminUser } from "@/lib/auth";
import {
  updateStoredEnquiryStatus,
  toggleStoredEnquiryRead,
  deleteStoredEnquiry,
} from "@/lib/server/storage";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const data = await request.json();

    if (data.action === "toggleRead") {
      const updated = toggleStoredEnquiryRead(id);
      if (!updated) {
        return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
      }
      return NextResponse.json(updated);
    }

    if (data.status) {
      const updated = updateStoredEnquiryStatus(id, data.status, data.notes);
      if (!updated) {
        return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
      }
      return NextResponse.json(updated);
    }

    return NextResponse.json({ error: "Invalid patch action" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update enquiry." }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const success = deleteStoredEnquiry(id);

  if (!success) {
    return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Enquiry deleted successfully." });
}
