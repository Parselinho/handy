// import { BadRequestError, UnauthorizedError } from "@/lib/ErrorHandler";
// import { connectDB } from "@/lib/mongoose";
// import { User } from "@/models/User";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// interface Credentials {
//   email: string;
//   password: string;
// }

// // Your login function that validates user credentials
// const login = async (credentials: Credentials) => {
//   try {
//     await connectDB();
//     const user = await User.findOne({ email: credentials.email });
//     if (!user) {
//       throw new UnauthorizedError("Invalid Credentials");
//     }
//     const isPasswordCorrect = await user.comparePassword(credentials.password);
//     if (!isPasswordCorrect) {
//       throw new UnauthorizedError("Invalid Credentials");
//     }
//     return user;
//   } catch (error) {
//     console.error("invalid login: ", error);
//     throw new BadRequestError("Error occur with login");
//   }
// };

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) return null;
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (error) {
//           console.error("Authorization error:", error);
//           return null;
//         }
//       },
//     }),
//   ],
//   //   pages: {
//   //     signIn: "auth/login",
//   //   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user._id.toString();
//         token.email = user.email;
//         token.username = `${user.firstName} ${user.lastName}`;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       const castedToken = token as unknown as {
//         id: string;
//         email: string;
//         name: string;
//         role: string;
//       };

//       if (castedToken && session.user) {
//         session.user.id = castedToken.id;
//         session.user.email = castedToken.email;
//         session.user.name = castedToken.name;
//         session.user.role = castedToken.role;
//       }
//       return session;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };

import { BadRequestError } from "@/lib/ErrorHandler";
import { connectDB } from "@/lib/mongoose";
import { User } from "@/models/User";
import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface Credentials {
  email: string;
  password: string;
}

const login = async (credentials: Credentials) => {
  try {
    await connectDB();
    const user = await User.findOne({ email: credentials.email });
    // console.log("email", user);
    if (!user) {
      throw new BadRequestError("Invalid Credentials");
    }
    const isPasswordCorrect = await user.comparePassword(credentials.password);
    if (!isPasswordCorrect) {
      throw new BadRequestError("Invalid Credentials");
    }
    return user;
  } catch (error) {
    console.error("Invalid Login");
    throw new BadRequestError("Error occur with Login");
  }
};

export const NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const user = await login(credentials);
          //   console.log("login user", user);
          return user;
        } catch (error) {
          console.error("auth error");
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  //   pages: {
  //     signIn: "auth/login",
  //   },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user._id.toString();
        token.email = user.email;
        token.username = `${user.firstName} ${user.lastName}`;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.username;
      session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
