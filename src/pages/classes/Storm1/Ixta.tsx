import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Ixta/StratRender";

const Storm1Ixta = () => {
  return (
    <>
      <Header />
      <Title text="Ixta Boss Fight" />
      <CustomImage imgSrc="/Ixta/map.png" alt="" height="200px" />
      <Body text="Only join after the Storm Jade joins and after casting Donate Power 2 or Donate Power 1 depending on the strat" />
      <StratRenderer />
      <Navigation prev="/storm1/fishing" next="/storm1/autloc" />
    </>
  );
};

export default Storm1Ixta;
