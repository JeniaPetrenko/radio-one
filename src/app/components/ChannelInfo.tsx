//Channel info

interface ChannelProps {
  image: string;
  tagline: string;
}

export const ChannelInfo = ({ image, tagline }: ChannelProps) => {
  return (
    <div>
      <img src={image} alt={tagline} />
      <p>{tagline}</p>
    </div>
  );
};
