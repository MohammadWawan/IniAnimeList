import nextAuth from "next-auth";
import googleProvider from "next-auth/providers/google";

const authOption = {
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_CLIENT ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
console.log(authOption);
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
