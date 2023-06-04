import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (typeof globalThis.window !== "undefined") {
    if (url.pathname !== "/login" && !document.cookie.includes("userToken")) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }
}
