//start pagge "Radio App" with link to proggamms
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Radio App</h1>
      <Link href="/channel">Go to Programs</Link>
    </main>
  );
}
