import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Utils from "./helper/Utils";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (typeof globalThis.window !== "undefined") {
    if (url.pathname !== "/" && !document.cookie.includes("userToken")) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }
}
