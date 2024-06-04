import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Ixta/StratRender";

const Storm3Ixta = () => {
  return (
    <>
      <Title text="Ixta Boss Fight" />
      <CustomImage imgSrc="/Ixta/map.png" alt="" height="200px" />
      <Body
        text="Let the Storm Jade pull.
        Only join after everyone else joins. Make sure to Cast Donate Power 3
        depending on strat"
      />
      <StratRenderer />
    </>
  );
};

export default Storm3Ixta;
