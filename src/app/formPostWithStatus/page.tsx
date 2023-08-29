import { revalidatePath } from "next/cache";
import Image from "next/image";
import AddButton from "./AddButton";
const todos: string[] = ["Learn React"];

export default function Home() {
  async function addTodo(data: FormData) {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
        <AddButton/>
      </form>
    </main>
  );
}
