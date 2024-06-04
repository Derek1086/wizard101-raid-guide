import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import StratRender from "../../../components/strats/Cameca/StratRender";

const Fire1Cameca = () => {
  return (
    <>
      <Title text="Cameca Boss Fight" />
      <Body text="Head North and get health from the North Fish n' Wisps" />
      <Body text="Head South and meetup with Myth jade, Myth 1 and Myth 2" />
      <CustomImage imgSrc="/Cameca/fishnwisps.png" alt="" height="200px" />
      <Body text="Wait for the Myth Jade to spawn Cameca" />
      <StratRender />
    </>
  );
};

export default Fire1Cameca;
