import Title from "../Text/Title";
import Body from "../Text/Body";
import CustomImage from "../CustomImage";

const NorthPuzzle = () => {
  return (
    <>
      <Title text="North Puzzle" />
      <Body text="Collect three tokens total, one from searching in pet mode, two from defeating mobs" />
      <CustomImage imgSrc="/SouthPuzzle/token.png" alt="" height="60px" />
      <Body text="Pet Token Locations" />
      <CustomImage imgSrc="/NorthPuzzle/map.png" alt="" height="250px" />
      <CustomImage imgSrc="/NorthPuzzle/tokens.png" alt="" height="250px" />
    </>
  );
};

export default NorthPuzzle;
