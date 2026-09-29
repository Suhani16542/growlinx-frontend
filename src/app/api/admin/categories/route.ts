import { NextResponse } from "next/server";
import { getCurrentAdminUser } from "@/lib/auth";
import { getStoredCategories, saveStoredCategory } from "@/lib/server/storage";

export async function GET() {
  const categories = getStoredCategories();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();

    if (!data.name || !data.name.trim()) {
      return NextResponse.json({ error: "Category name is required." }, { status: 400 });
    }

    const saved = saveStoredCategory(data);
    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: "Failed to create category." }, { status: 500 });
  }
}
