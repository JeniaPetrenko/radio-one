interface AudioPlayerProps {
  audioUrl: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  if (!audioUrl) {
    return <p>No audio available</p>;
  }
  return (
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};
