import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRender from "../../../components/strats/Cameca/StratRender";

const Fire1Cameca = () => {
  return (
    <>
      <Header />
      <Title text="Cameca Boss Fight" />
      <Body text="Head North and get health from the North Fish n' Wisps" />
      <Body text="Head South and meetup with Myth jade, Myth 1 and Myth 2" />
      <CustomImage imgSrc="/Cameca/fishnwisps.png" alt="" height="150px" />
      <Body text="Wait for the Myth Jade to spawn Cameca" />
      <StratRender />
      <Navigation prev="/fire1/yetaxa" next="/fire1/hunhau" />
    </>
  );
};

export default Fire1Cameca;
