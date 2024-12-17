//Page with the list of episodes for a current program
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChannelInfo } from "@/app/components/ChannelInfo";
import { use } from "react";
import { AudioPlayer } from "@/app/components/AudioPlayer";
import { Channel, Episode, ChannelResponse } from "@/global";
import FilterEpisodes from "@/app/components/Filtering";

export default function EpisodesPage({
  params: paramsPromise,
}: {
  params: Promise<{ programId: string }>;
}) {
  const params = use(paramsPromise);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>(episodes);
  const [filter, setFilter] = useState("");
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
        const channelData: ChannelResponse = await channelResponse.json();
        console.log("Channel data:", channelData); // Вивести дані каналу
        setChannel(channelData.channel);

        // Fetch episodes for program
        const episodesResponse = await fetch(
          `https://api.sr.se/api/v2/episodes/index?format=json&programid=${params.programId}
`
        );
        if (!episodesResponse.ok) {
          throw new Error("Failed to fetch episode data");
        }
        const episodesData = await episodesResponse.json();
        console.log("Episodes data:", episodesData); // Вивести дані епізодів
        setEpisodes(episodesData.episodes);
        setFilteredEpisodes(episodesData.episodes);
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
        <ChannelInfo
          image={channel.image}
          tagline={channel.tagline}
          imagetemplate={""}
          color={""}
          siteurl={""}
          liveaudio={{
            id: 0,
            url: "",
            statkey: "",
          }}
          scheduleurl={""}
          channeltype={""}
          xmltvid={""}
          id={0}
          name={""}
        />
      )}

      <h1>Episodes</h1>
      <FilterEpisodes
        episodes={episodes}
        setFilteredEpisodes={setFilteredEpisodes}
        filter={filter}
      />
      <div className="card-body">
        <h2>Episodes for Program {params.programId}</h2>
        <ul>
          {filteredEpisodes.map((episode) => {
            // Визначити URL аудіофайлу
            const audioUrl =
              episode.listenpodfile?.url ||
              episode.broadcast?.broadcastfiles?.[0]?.url ||
              "";

            return (
              <li key={episode.id}>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
                <img
                  src={episode.imageurl || "/placeholder.jpg"}
                  alt={episode.title}
                  width={100}
                  height={100}
                />
                <AudioPlayer audioUrl={audioUrl} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
