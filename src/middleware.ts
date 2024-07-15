import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/", "/dashboard"];

export default async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
