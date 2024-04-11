"use client";

const error = ({ error }: { error: any }) => {
  return (
    <main>
      <h1>Something Wrong...</h1>
      <p>{error.message}</p>
    </main>
  );
};
export default error;

// export default function ErrorBoundary({ error }: { error: any }) {
//   return (
//     <main>
//       <h1>Something Went Wrong...</h1>
//       <p>{error.message}</p>
//     </main>
//   );
// }
