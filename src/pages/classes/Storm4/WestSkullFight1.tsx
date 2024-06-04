import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import WestSkull1 from "../../../components/strats/West/WestSkull1";

const Storm4WestSkullFight1 = () => {
  return (
    <>
      <Title text="West Skull 1 Fight" />
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="200px"
      />
      <Body text="Join after Support/Puller and follow strat" />
      <WestSkull1 />
    </>
  );
};

export default Storm4WestSkullFight1;
