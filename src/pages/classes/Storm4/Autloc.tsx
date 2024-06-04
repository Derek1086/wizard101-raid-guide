import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const Storm4Autloc = () => {
  return (
    <>
      <Title text="Autloc Boss Fight" />
      <CustomImage imgSrc="/Autloc/map.png" alt="" height="200px" />
      <Body text="Join last after casting Donate Power 2 or Donate Power 3 depending on strat" />
      <StratRenderer />
    </>
  );
};

export default Storm4Autloc;
