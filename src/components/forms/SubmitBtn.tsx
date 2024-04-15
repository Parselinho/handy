"use client";

import { useFormStatus } from "react-dom";
import { getDebugger } from "@/lib/debugger";

const debug = getDebugger("submitBtn-comp");

const SubmitBtn = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" aria-disabled={pending}>
      {pending ? "Submitting..." : text}
    </button>
  );
};
export default SubmitBtn;
