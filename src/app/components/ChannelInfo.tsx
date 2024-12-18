//Channel info
import { Channel } from "../../global";

export const ChannelInfo = ({ image, tagline }: Channel) => {
  return (
    <div className="channel-info">
      <img className="channel-icon" src={image} alt={tagline} />
      <p className="channel-description">{tagline}</p>
    </div>
  );
};
