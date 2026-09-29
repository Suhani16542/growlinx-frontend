import { NextResponse } from "next/server";
import { getCurrentAdminUser } from "@/lib/auth";
import { getStoredBlogs, saveStoredBlog } from "@/lib/server/storage";

export async function GET() {
  const blogs = getStoredBlogs();
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();

    if (!data.title) {
      return NextResponse.json({ error: "Blog title is required." }, { status: 400 });
    }

    const saved = saveStoredBlog(data);
    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: "Failed to create blog post." }, { status: 500 });
  }
}
