import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRender from "../../../components/strats/Cameca/StratRender";

const Myth2Cameca = () => {
  return (
    <>
      <Header />
      <Title text="Cameca Boss Fight" />
      <CustomImage imgSrc="/Cameca/fishnwisps.png" alt="" height="200px" />
      <Body text="Join last and after casting Donate Power 2 depending on strat" />
      <StratRender />
      <Navigation prev="/myth2/puzzles" next="/myth2/hunhau" />
    </>
  );
};

export default Myth2Cameca;
