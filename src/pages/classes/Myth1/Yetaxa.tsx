import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Yetaxa/StratRenderer";

const Myth1Yetaxa = () => {
  return (
    <>
      <Title text="Yetaxa Boss Fight" />
      <Body text="Head to the top/side of the pyramid when Fire team is ready" />
      <CustomImage imgSrc="/Yetaxa/top.png" alt="" height="200px" />
      <Body text="Join last after Fire 2" />
      <StratRenderer />
    </>
  );
};

export default Myth1Yetaxa;
