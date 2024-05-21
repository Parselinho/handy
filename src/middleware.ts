// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "auth/login",
//   },
// });

// export const config = {
//   matcher: ["/", "/protected-route"], // Protect the home page and any other routes you need
// };

// console.log("Middleware executed");

export { default } from "next-auth/middleware";

export const config = { matcher: ["/", "/api/:path*"] };
