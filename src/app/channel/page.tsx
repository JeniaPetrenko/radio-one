//Page with the list of programs for a current channel
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChannelInfo } from "../components/ChannelInfo";

interface Channel {
  id: number;
  name: string;
  image: string;
  tagline: string;
}

interface Program {
  id: string;
  name: string;
  description: string;
  programcategory: { id: number; name: string };
  programimage: string;
}

export default function ProgramsPage() {
  // Тимчасові дані для прикладу
  // const mockPrograms = [
  //   { id: "1", name: "Program 1", description: "Description 1" },
  //   { id: "2", name: "Program 2", description: "Description 2" },
  //   { id: "3", name: "Program 3", description: "Description 3" },
  //   { id: "4", name: "Program 4", description: "Description 4" },
  // ];

  const [programs, setPrograms] = useState<Program[]>([]);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPrograms() {
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

        // Fetch programs for channel
        const programsResponse = await fetch(
          `https://api.sr.se/api/v2/programs/index?format=json&filter=program.haspod&filtervalue=true&channelid=132`
        );
        if (!programsResponse.ok) {
          throw new Error("Failed to fetch program data");
        }
        const programsData = await programsResponse.json();
        console.log("Programs data:", programsData); // Вивести дані програм
        setPrograms(programsData.programs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    }
    getPrograms();
  }, []);

  const [error, setError] = useState<string | null>(null);
  if (error) return setError(error);
  if (isLoading) return <div>Loading...</div>;
  if (!channel || programs.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <Link href="/">Back to Start</Link>

      {channel && (
        <ChannelInfo image={channel.image} tagline={channel.tagline} />
      )}

      <div className="card-body">
        <h2>Programs</h2>
        <ul>
          {programs.map((program) => (
            <li key={program.id}>
              <Link href={`/channel/episodes/${program.id}`}>
                <img
                  src={program.programimage}
                  alt={program.name}
                  width={300}
                  height={300}
                />
                <h3>{program.name}</h3>
                <p>{program.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}