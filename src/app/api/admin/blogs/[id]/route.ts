import { NextResponse } from "next/server";
import { getCurrentAdminUser } from "@/lib/auth";
import {
  getStoredBlogById,
  saveStoredBlog,
  deleteStoredBlog,
  togglePublishStoredBlog,
} from "@/lib/server/storage";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const blog = getStoredBlogById(id);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export async function PUT(request: Request, { params }: RouteParams) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const data = await request.json();
    const updated = saveStoredBlog({ ...data, id });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: "Failed to update blog post." }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const toggled = togglePublishStoredBlog(id);
    if (!toggled) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(toggled);
  } catch (error) {
    return NextResponse.json({ error: "Failed to toggle status." }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  const user = await getCurrentAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const success = deleteStoredBlog(id);

  if (!success) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Blog deleted successfully." });
}
