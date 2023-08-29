"use client";

import { useRef, useTransition } from "react";


export default function AddButton({
  addTodo,
}: {
  addTodo: (todo: string) => Promise<void>;
}) {
  const [pending, startTransition] = useTransition()
  const todoRef = useRef<HTMLInputElement>(null)
  
  return (
    <div>
      <input
        ref={todoRef}
        type="text"
        name="todo"
        className="text-black border border-gray-300 rounded-lg py-4 text-base"
      />
      <button
        disabled={pending}
        onClick={async () => {
          startTransition(async   () => {
            await addTodo(todoRef.current!.value);
          })
        }}
        className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center rounded-xl p-4"
      >
        Add Todo
      </button>
    </div>
  );
}
