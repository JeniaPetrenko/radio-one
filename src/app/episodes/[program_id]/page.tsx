//show the channel info and list the available EPISODES for a specific program
import Link from "next/link";

export default function ProgramPage() {
  const episodes = [
    { id: "1", name: "Episode 1" },
    { id: "2", name: "Episode 2" },
    { id: "3", name: "Episode 3" },
  ];

  return (
    <div>
      <h1>Channels info</h1>
      <Link href={"/channels"}>Back to channels </Link>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episodes) => (
          <li key={episodes.id}>{episodes.name} - Play</li>
        ))}
      </ul>
    </div>
  );
}
