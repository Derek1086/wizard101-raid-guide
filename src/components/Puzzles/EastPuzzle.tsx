import Title from "../Text/Title";
import Body from "../Text/Body";
import CustomImage from "../CustomImage";

const EastPuzzle = () => {
  return (
    <>
      <Title text="East Puzzle" />
      <Body text="Drums are yellow sigils that spawn in specific locations. Once a player steps onto a drum it turns green" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <CustomImage imgSrc="/EastPuzzle/yellow.png" alt="" height="100px" />
        <CustomImage imgSrc="/EastPuzzle/green.png" alt="" height="100px" />
      </div>
      <Body text="Find drum that you are assigned to" />
      <CustomImage imgSrc="/EastPuzzle/map.png" alt="" height="250px" />
      <Body text="Once in position for your drum, call out your assigned number (ex. 5)" />
      <Body text="If you have more than one drum, make sure to stand in the middle, white circle below as an example" />
      <CustomImage imgSrc="/EastPuzzle/positioning.png" alt="" height="150px" />
      <Body text="When drums are done, Ixta will spawn. If someone misses a drum, a mob will spawn and someone will have to kill it in order to restart drums" />
    </>
  );
};

export default EastPuzzle;
