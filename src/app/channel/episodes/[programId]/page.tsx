//Page with the list of episodes for a current program

import Link from "next/link";

export default function EpisodesPage({
  params,
}: {
  params: { programId: string };
}) {
  // Тимчасові дані для прикладу
  const mockEpisodes = [
    { id: "1", title: "Episode 1", description: "Description 1" },
    { id: "2", title: "Episode 2", description: "Description 2" },
  ];

  return (
    <div>
      <Link href="/channel">Back to Programs</Link>

      {/* Місце для інформації про канал */}
      <div>
        <h2>Channel Info</h2>
        <p>Channel Tagline</p>
      </div>

      {/* Список епізодів */}
      <div>
        <h2>Episodes for Program {params.programId}</h2>
        <ul>
          {mockEpisodes.map((episode) => (
            <li key={episode.id}>
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
              <button>Play Episode</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
