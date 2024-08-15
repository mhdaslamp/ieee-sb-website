import { color } from "framer-motion";

const AchievementCard = ({ image, name, details }) => {
  return (
    <div className="relative society-card w-56 h-100 border-solid border-2 m-4 p-4 rounded-2xl flex flex-col justify-between items-center shadow-lg">
      <img
        src={image}
        alt={name}
        className="max-w-full max-h-full rounded-md object-cover"
      />
      <h2 className="text-center text-sm font-semibold text-gray-600 rotated-text">
        {name}
      </h2>
      <h4 className="text-center text-xs text-black-500"  style={{ color: 'grey' }} >{details}</h4> {/* New h4 tag */}
      
    </div>
  );
};

export default AchievementCard;
