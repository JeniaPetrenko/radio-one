import Link from "next/link";

export default function ChannelPage() {
  const channels = [
    { id: "1", name: "Channel 1" },
    { id: "2", name: "Channel 2" },
    { id: "3", name: "Channel 3" },
  ];

  return (
    <div>
      <h1>Programms</h1>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <Link href={`/program/${channel.id}`}>
              <a>{channel.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}