import { NextResponse } from "next/server";
import { getCurrentAdminUser } from "@/lib/auth";
import { saveStoredCategory, deleteStoredCategory } from "@/lib/server/storage";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(request: Request, { params }: RouteParams) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const data = await request.json();
    if (!data.name || !data.name.trim()) {
      return NextResponse.json({ error: "Category name is required." }, { status: 400 });
    }
    const updated = saveStoredCategory({ ...data, id });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update category." }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const result = deleteStoredCategory(id);

  if (!result.success) {
    return NextResponse.json({ error: result.error || "Cannot delete category." }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: "Category deleted successfully." });
}
