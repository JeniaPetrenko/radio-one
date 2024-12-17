//Channel info
import { Channel } from "../../global";

export const ChannelInfo = ({ image, tagline }: Channel) => {
  return (
    <div>
      <img src={image} alt={tagline} />
      <p>{tagline}</p>
    </div>
  );
};
