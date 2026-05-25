// This API route is no longer used — chatbot is now handled by tawk.to.
// You can safely delete the /src/app/api folder.

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Not in use" }, { status: 410 });
}
