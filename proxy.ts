import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const hostname = req.headers.get("host") || "";

  const hostWithoutPort = hostname.replace(/:\d+$/, "");
  const hostParts = hostWithoutPort.split(".");

  const isLocalhost = hostWithoutPort.endsWith("localhost");
  const subdomain = isLocalhost
    ? (hostParts.length > 1 ? hostParts[0] : undefined)
    : (hostParts.length > 2 ? hostParts[0] : undefined);

  if (req.nextUrl.pathname.startsWith("/_next") || req.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (subdomain === "test") {
    const pathname = req.nextUrl.pathname === "/" ? "" : req.nextUrl.pathname;
    return NextResponse.rewrite(new URL(`/blog${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};