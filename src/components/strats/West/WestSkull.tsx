import WestSkull1 from "./WestSkull1";
import WestSkull2 from "./WestSkull2";
import WestSkull1Myth from "./WestSkull1Myth";
import Header from "../../Header";
import Title from "../../Text/Title";
import CustomImage from "../../CustomImage";

const WestSkull = () => {
  return (
    <>
      <Header role="" />
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="300px"
      />
      <Title text="West Skull 1" />
      <br />
      <WestSkull1 />
      <Title text="West Skull 1 (Myth Team)" />
      <br />
      <WestSkull1Myth />
      <Title text="West Skull 2" />
      <br />
      <WestSkull2 />
    </>
  );
};

export default WestSkull;
