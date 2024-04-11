"use client";

import { useFormStatus } from "react-dom";
import { getDebugger } from "@/app/lib/debugger";

const debug = getDebugger("submitBtn-comp");

const SubmitBtn = ({ text }) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? "Submitting..." : text}
    </button>
  );
};
export default SubmitBtn;
