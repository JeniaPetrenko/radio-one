import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <main>
        <h1>Radio App</h1>
        <Link href="/channels">Go to Programms</Link>
      </main>
    </div>
  );
}
