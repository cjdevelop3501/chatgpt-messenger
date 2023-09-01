import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        })
    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }