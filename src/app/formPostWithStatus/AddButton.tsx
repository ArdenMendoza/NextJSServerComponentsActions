"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center rounded-xl p-4"
    >
      Add Todo
    </button>
  );
}
