import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Yetaxa/StratRenderer";

const Fire2Yetaxa = () => {
  return (
    <>
      <Title text="Yetaxa Boss Fight" />
      <Body text="Head North and work with Fire Jade and Fire 1 to deposit Death fish in North, South, and both West Fish n' Wisps" />
      <Body text="Head to the top/side of the pyramid" />
      <CustomImage imgSrc="/Yetaxa/top.png" alt="" height="200px" />
      <Body
        text="Wait for the Fire Jade to pull the fight, then cast Donate Power 3.
Join only AFTER Fire 1 joins"
      />
      <StratRenderer />
    </>
  );
};

export default Fire2Yetaxa;
