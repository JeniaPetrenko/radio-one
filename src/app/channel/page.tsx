//Page with the list of programs for a current channel
import Link from "next/link";

export default function ProgramsPage() {
  // Тимчасові дані для прикладу
  const mockPrograms = [
    { id: "1", name: "Program 1", description: "Description 1" },
    { id: "2", name: "Program 2", description: "Description 2" },
  ];

  return (
    <div>
      <Link href="/">Back to Start</Link>

      {/* Місце для інформації про канал */}
      <div>
        <h2>Channel Info</h2>
        <p>Channel Tagline</p>
      </div>

      {/* Список програм */}
      <div>
        <h2>Programs</h2>
        <ul>
          {mockPrograms.map((program) => (
            <li key={program.id}>
              <Link href={`/channel/episodes/${program.id}`}>
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
