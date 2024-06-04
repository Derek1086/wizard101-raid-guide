import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const StormJadeAutloc = () => {
  return (
    <>
      <Title text="Autloc Boss Fight" />
      <CustomImage imgSrc="/Autloc/map.png" alt="" height="200px" />
      <Body text="Pull Autloc first" />
      <StratRenderer />
    </>
  );
};

export default StormJadeAutloc;
