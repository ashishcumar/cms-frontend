import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // have check whether user is admin or not
  // const url = request.nextUrl.clone();
  // if (url.pathname !== "/") {
    
  //   url.pathname = "/404";
  //   return NextResponse.redirect(url);
  // }
}
