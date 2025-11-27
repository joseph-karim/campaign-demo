// Auth routes temporarily disabled for static report pages
// import { auth } from "@/lib/auth";
// import { toNextJsHandler } from "better-auth/next-js";
// export const { POST, GET } = toNextJsHandler(auth);

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Auth disabled' }, { status: 503 });
}

export async function GET() {
  return NextResponse.json({ error: 'Auth disabled' }, { status: 503 });
}
