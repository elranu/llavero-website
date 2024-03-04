
import image from "../assets/astronout-play.svg";
export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <img src={image} alt="astronaut" />
    </div>
  );
};
