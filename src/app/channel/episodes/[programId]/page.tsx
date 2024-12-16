//Page with the list of episodes for a current program

import Link from "next/link";

export default function EpisodesPage({
  params,
}: {
  params: { programId: string };
}) {
  // // Тимчасові дані для прикладу
  // const mockEpisodes = [
  //   { id: "1", title: "Episode 1", description: "Description 1" },
  //   { id: "2", title: "Episode 2", description: "Description 2" },
  //   { id: "3", title: "Episode 3", description: "Description 3" },
  //   { id: "4", title: "Episode 4", description: "Description 4" },
  // ];

  return (
    <div>
      {/* Місце для інформації про канал */}
      <div>
        <h2>Channel Info</h2>
        <p>Channel Tagline</p>
      </div>
      <Link href="/channel">Back to Programs</Link>

      {/* Список епізодів */}
      <div>
        <h2>Episodes for Program {params.programId}</h2>
        <ul>
          {/* {mockEpisodes.map((episode) => (
            <li key={episode.id}>
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
              <button>Play Episode</button>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
