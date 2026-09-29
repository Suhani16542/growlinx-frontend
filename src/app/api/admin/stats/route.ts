import { NextResponse } from "next/server";
import { getCurrentAdminUser } from "@/lib/auth";
import { getAdminStats } from "@/lib/server/storage";

export async function GET() {
  const user = await getCurrentAdminUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stats = getAdminStats();
  return NextResponse.json(stats);
}
