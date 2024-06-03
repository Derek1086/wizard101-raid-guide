import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const StormJadeAutloc = () => {
  return (
    <>
      <Header />
      <Title text="Autloc Boss Fight" />
      <CustomImage imgSrc="/Autloc/map.png" alt="" height="200px" />
      <Body text="Pull Autloc first" />
      <StratRenderer />
      <Navigation prev="/stormjade/ixta" next="/stormjade/northpulling" />
    </>
  );
};

export default StormJadeAutloc;
