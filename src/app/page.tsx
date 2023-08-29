import Link from "next/link";

export default function Home() {

  return (
    <main className="p-5 flex flex-col">
      <Link href="/formPost">Simple Form Post</Link>
      <Link href="/formPostWithStatus">Simple Form Post with Status</Link>
      <Link href="/formPostWithWithTransition">Simple Form Post with Transition</Link>
      <Link href="/pokemonSearch">Pokemon Search</Link>
    </main>
  );
}
