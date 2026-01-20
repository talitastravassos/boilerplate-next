import Link from "next/link";

export const Main = () => {
  return (
    <main>
      <h1 style={{ margin: "1rem 0" }}>Main Page</h1>
      <Link href="/dumb-page">Dumb Page</Link>
      <Link href="/regular-page">Regular Page</Link>
    </main>
  );
};
