import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Yetaxa/StratRenderer";

const Myth1Yetaxa = () => {
  return (
    <>
      <Header />
      <Title text="Yetaxa Boss Fight" />
      <Body text="Head to the top/side of the pyramid when Fire team is ready" />
      <CustomImage imgSrc="/Yetaxa/top.png" alt="" height="200px" />
      <Body text="Join last after Fire 2" />
      <StratRenderer />
      <Navigation prev="/myth1/puzzles" next="/myth1/cameca" />
    </>
  );
};

export default Myth1Yetaxa;
