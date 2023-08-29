import { revalidatePath } from "next/cache";
import Image from "next/image";
import AddButton from "./AddButton";
const todos: string[] = ["Learn React"];

export default function Home() {
  async function addTodo(data: string) {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const todo = data;
    todos.push(todo);
    revalidatePath("/formPostWithTransition");
  }

  return (
    <main className="p-24">
      <h1 className="text-4x1 font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
        <AddButton addTodo={addTodo}/>
    </main>
  );
}
