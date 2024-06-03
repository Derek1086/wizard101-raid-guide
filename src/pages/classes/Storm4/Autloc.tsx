import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const Storm4Autloc = () => {
  return (
    <>
      <Header />
      <Title text="Autloc Boss Fight" />
      <CustomImage imgSrc="/Autloc/map.png" alt="" height="200px" />
      <Body text="Join last after casting Donate Power 2 or Donate Power 3 depending on strat" />
      <StratRenderer />
      <Navigation prev="/storm4/puzzles" next="/storm4/hunhau" />
    </>
  );
};

export default Storm4Autloc;
