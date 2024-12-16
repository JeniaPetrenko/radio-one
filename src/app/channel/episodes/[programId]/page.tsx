//Page with the list of episodes for a current program
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChannelInfo } from "@/app/components/ChannelInfo";

interface Channel {
  id: number;
  name: string;
  image: string;
  tagline: string;
}

interface Episode {
  id: string;
  title: string;
  description: string;
  image: string;
  //audioplayer
}

export default function EpisodesPage({
  params,
}: {
  params: { programId: string };
}) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // // Тимчасові дані для прикладу
  // const mockEpisodes = [
  //   { id: "1", title: "Episode 1", description: "Description 1" },
  //   { id: "2", title: "Episode 2", description: "Description 2" },
  //   { id: "3", title: "Episode 3", description: "Description 3" },
  //   { id: "4", title: "Episode 4", description: "Description 4" },
  // ];

  useEffect(() => {
    async function getEpisodes() {
      setIsLoading(true);
      try {
        // Fetch channel info
        const channelResponse = await fetch(
          `https://api.sr.se/api/v2/channels/132?format=json`
        );
        if (!channelResponse.ok) {
          throw new Error("Failed to fetch channel data");
        }
        const channelData = await channelResponse.json();
        console.log("Channel data:", channelData); // Вивести дані каналу
        setChannel(channelData.channel);

        // Fetch episodes for program
        const episodesResponse = await fetch(
          `https://api.sr.se/api/v2/episodes/index?format=json&programid=${params.programId}`
        );
        if (!episodesResponse.ok) {
          throw new Error("Failed to fetch episode data");
        }
        const episodesData = await episodesResponse.json();
        console.log("Episodes data:", episodesData); // Вивести дані епізодів
        setEpisodes(episodesData.episodes);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
      setIsLoading(false);
    }
    getEpisodes();
  }, [params.programId]);

  const [error, setError] = useState<string | null>(null);
  if (error) return setError(error);
  if (isLoading) return <p>Loading...</p>;
  if (!channel || episodes.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <Link href="/channel">Back to Programs</Link>

      {channel && (
        <ChannelInfo image={channel.image} tagline={channel.tagline} />
      )}

      <div className="card-body">
        <h2>Episodes for Program {params.programId}</h2>
        <ul>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
              <img src={episode.image} alt={episode.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
