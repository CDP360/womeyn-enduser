import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { OauthSuccess, Userlogin } from "../../../src/services/user-login-service/user-login-services";
export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const response = await Userlogin(credentials) || OauthSuccess(credentials);
                const { user } = await response?.data;
                return {
                    token: user?.tokens?.access?.token,
                    email: user?.email,
                    // name: user?.firstname + " " + user?.lastname
                    password: user?.password,
                    userId: user?._id,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                user && (token.user = user);
            }
            return token;
        },
        async session({ session, token, user }) {
            if (token) {
                session.user = token.user;
            }
            return session;
        },
    },
    secret: process.env.WOMEYN_SECRET_KEY,
});
