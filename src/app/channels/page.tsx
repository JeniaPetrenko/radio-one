import Link from "next/link";

export default function ChannelPage() {
  const channels = [
    { id: "1", name: "Channel 1" },
    { id: "2", name: "Channel 2" },
    { id: "3", name: "Channel 3" },
  ];

  return (
    <div>
      <h1>Channels info</h1>
      <Link href={"/"}>Back to Start</Link>
      <h2>Programms page</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <Link href={`/episodes/${channel.id}`}>
              {channel.name} - go to episodes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
