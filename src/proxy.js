import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request) {

  const token = request.cookies.get("token")?.value;

  const pathname = request.nextUrl.pathname;

  const isAdminRoute = pathname.startsWith("/admin");

  const isLoginPage = pathname === "/login";

  if (!token && isAdminRoute) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }


  if (token) {
    try {

      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // BLOCK LOGIN PAGE
      if (isLoginPage) {

        return NextResponse.redirect(
          new URL("/admin", request.url)
        );

      }

    } catch (error) {

      console.log("JWT ERROR:", error.message);

      // INVALID TOKEN
      if (isAdminRoute) {

        return NextResponse.redirect(
          new URL("/login", request.url)
        );

      }

    }

  }

  return NextResponse.next();
}

export const config = {

  matcher: [
    "/admin/:path*",
    "/login",
  ],

};