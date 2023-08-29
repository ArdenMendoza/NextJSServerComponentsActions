import { revalidatePath } from "next/cache";
import Image from "next/image";
const todos: string[] = ["Learn React"];

export default function Home() {
  async function addTodo(data: FormData) {
    "use server";
    const todo = data.get("todo") as string;
    todos.push(todo);
    revalidatePath("/");
  }

  return (
    <main className="p-24">
      <h1 className="text-4x1 font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <input
          type="text"
          name="todo"
          className="text-black border border-gray-300 rounded-lg py-4 text-base"
        />
        <button
          type="submit"
          className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center rounded-xl p-4"
        >
          Add Todo
        </button>
      </form>
    </main>
  );
}
