import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login", // Redirects users to the login page if not signed in
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true; // Allow access to dashboard if logged in
        return false; // Otherwise, block access to the dashboard
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl)); // Redirect logged-in users away from non-dashboard pages
      }

      return true; // Allow access to other pages
    },
  },
  providers: [], // No providers defined yet
} satisfies NextAuthConfig;
