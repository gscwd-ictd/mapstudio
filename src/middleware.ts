import { getLogtoContext } from "@logto/next/server-actions";
import { NextRequest, NextResponse } from "next/server";
import { logtoConfig } from "./lib/utils/logto-config";

export default async function middleware(request: NextRequest) {
  console.log("middleware");
  // const { isAuthenticated } = await getLogtoContext(logtoConfig);
  // if (!isAuthenticated && request.nextUrl.pathname !== "/signin") {
  //   //console.log(request.nextUrl.pathname);
  //   return NextResponse.redirect(new URL("/signin", request.url));
  // }
  // return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * See https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher for details
     *
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!signin|api|_next/static|_next/image|favicon.ico|$).*)",
  ],
};
