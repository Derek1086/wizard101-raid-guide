import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Yetaxa/StratRenderer";

const Fire1Yetaxa = () => {
  return (
    <>
      <Header />
      <Title text="Yetaxa Boss Fight" />
      <Body text="Head North and work with Fire Jade and Fire 2 to deposit Death fish in North, South, and both West Fish n' Wisps" />
      <Body text="Head to the top/side of the pyramid" />
      <CustomImage imgSrc="/Yetaxa/top.png" alt="" height="200px" />
      <Body text="Wait for the Fire Jade to pull the fight, then join right after the Fire Jade. If it is a strat that requires you to cast Donate Power 1, cast it first, then join the fight" />
      <StratRenderer />
      <Navigation prev="/fire1/westskullfight2" next="/fire1/cameca" />
    </>
  );
};

export default Fire1Yetaxa;
