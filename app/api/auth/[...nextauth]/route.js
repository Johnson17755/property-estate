import { authOptions } from "@/utilis/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// This code is for setting up NextAuth authentication in a Next.js application.
//  It imports the authOptions from a utility file and creates an authentication handler using NextAuth.
// The handler is then exported for both GET and POST requests, allowing for user sign-in and
// session management.
