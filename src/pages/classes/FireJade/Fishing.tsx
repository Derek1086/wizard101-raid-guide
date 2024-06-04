import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const FishingFireIce = () => {
  return (
    <>
      <Title text="Fishing" />
      <Body text="Catch 4 Fire and 4 Ice Fish in the ponds in the top right near drums" />
      <Body
        text="Coordinate with Fire 2 where to deposit Fire and Ice Fish in both West
        and North Fish n' Wisps"
      />
      <CustomImage
        imgSrc="/FireJade/fire-ice-fishing.png"
        alt=""
        height="200px"
      />
      <Title text="Raining East?" />
      <SouthPuzzle />
    </>
  );
};

export default FishingFireIce;
