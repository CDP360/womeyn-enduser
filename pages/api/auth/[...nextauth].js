// // // import NextAuth from "next-auth";
// // // import CredentialsProvider from "next-auth/providers/credentials";
// // // import { OauthSuccess, Userlogin } from "../../../src/services/user-login-service/user-login-services";
// // // export default NextAuth({
// // //     session: {
// // //         jwt: true,
// // //     },
// // //     providers: [
// // //         CredentialsProvider({
// // //             async authorize(credentials) {
// // //                 const response = await Userlogin(credentials) || OauthSuccess(credentials);
// // //                 const { user } = await response?.data;
// // //                 return {
// // //                     token: user?.tokens?.access?.token,
// // //                     email: user?.email,
// // //                     // name: user?.firstname + " " + user?.lastname
// // //                     password: user?.password,
// // //                     userId: user?._id,
// // //                 };
// // //             },
// // //         }),
// // //     ],
// // //     callbacks: {
// // //         async jwt({ token, user }) {
// // //             if (user) {
// // //                 user && (token.user = user);
// // //             }
// // //             return token;
// // //         },
// // //         async session({ session, token, user }) {
// // //             if (token) {
// // //                 session.user = token.user;
// // //             }
// // //             return session;
// // //         },
// // //     },
// // //     secret: process.env.WOMEYN_SECRET_KEY,
// // // });

// // import NextAuth from "next-auth";
// // import CredentialsProvider from 'next-auth/providers/credentials';
// // import { Userlogin } from "../../../src/services/user-login-service/user-login-services";



// // export default NextAuth({
// //     session: {
// //         strategy: "kalai"
// //     },
// //     providers: [
// //         CredentialsProvider({
// //             type: "credentials",
// //             credentials: {
// //                 email: {
// //                     label: "Email", type: "email", placeholder: "Enter Email!"
// //                 },
// //                 password: {
// //                     label: "Password", type: "password", placeholder: "Enter Password!"
// //                 },
// //             },
// //             authorize(credentials, req) {
// //                 const { email, password } = credentials;

// //                 if (!email || !password) {
// //                     throw new Error("Userunauthendicated!!");
// //                 }
// //                 else {
// //                     console.log("sucfdess")
// //                 }
// //                 return { id: "1", name: email, email: email }
// //             }
// //         })
// //     ],
// //     // pages: {
// //     //     signIn: "/login",
// //     //     signUp: "/signup"
// //     // }
// // })




// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { Userlogin } from "../../../src/services/user-login-service/user-login-services";
// export default NextAuth({
//     session: {
//         jwt: true,
//     },
//     providers: [
//         CredentialsProvider({
//             async authorize(credentials) {
//                 const response = await credentials;
//                 // console.log("response",response)
//                 // const { user } = await response?.data;
//                 return {
//                     token: response?.token,
//                     email: response?.email,
//                     name: response?.firstname,
//                     password: response?.password,
//                     userId: response?.id,
//                 };
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, user }) {
//             user && (token.user = user);
//             return token;   
//         },
//         async session({ session, token, user }) {
//             session.user = token.user;
//             return session;
//         },
//         // async jwt({ token, user }) {
//         //     user && (token.user = user);
//         //     return token;
//         // },
//         // async session({ session, token, user }) {
//         //     session.user = token.user;
//         //     return session;
//         // },
//     },
//     secret: process.env.NEXT_PUBLIC_SECRET_CODE,
// });
