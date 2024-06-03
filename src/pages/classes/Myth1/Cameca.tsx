import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRender from "../../../components/strats/Cameca/StratRender";

const Myth1Cameca = () => {
  return (
    <>
      <Header />
      <Title text="Cameca Boss Fight" />
      <CustomImage imgSrc="/Cameca/fishnwisps.png" alt="" height="200px" />
      <Body text="Join after Fire 1 and after casting Donate Power 2 depending on strat" />
      <StratRender />
      <Navigation prev="/myth1/yetaxa" next="/myth1/hunhau" />
    </>
  );
};

export default Myth1Cameca;
