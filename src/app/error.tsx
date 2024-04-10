"use client";

const error = ({ error }: { error: any }) => {
  return (
    <main>
      <h1>Something Wrong...</h1>
      <p>{error}</p>
    </main>
  );
};
export default error;
