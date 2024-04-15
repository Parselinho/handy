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
