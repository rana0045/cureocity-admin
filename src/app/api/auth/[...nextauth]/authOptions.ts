import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { compare } from "bcryptjs";
import { connect } from "@/lib/connectDB";
import User from "@/models/Admin";

export const authOptions: NextAuthOptions = {
   pages: {
      signIn: "/login",
   },
   session: {
      strategy: "jwt",
   },
   callbacks: {
      jwt: async ({ token, user }) => {
         user && (token.user = user);
         return token;
      },
      session: async ({ session, token }) => {
         const user: any = token.user;
         session.user = user;

         return session;
      },
   },
   providers: [
      CredentialsProvider({
         id: "credentials",
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            connect();

            const user = await User.findOne({
               email: credentials?.email,
            }).select("+password");

            if (!user) {
               throw new Error("Invalid credentials");
            }
            if (user.role != "super admin") {
               throw new Error("login with admin only");
            }

            const isPasswordCorrect = await compare(credentials?.password!, user.password);

            if (!isPasswordCorrect) {
               throw new Error("Invalid credentials");
            }

            return user;
         },
      }),
   ],
};
