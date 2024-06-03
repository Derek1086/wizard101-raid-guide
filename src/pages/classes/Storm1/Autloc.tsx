import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const Storm1Autloc = () => {
  return (
    <>
      <Header />
      <Title text="Autloc Boss Fight" />
      <CustomImage imgSrc="/Autloc/map.png" alt="" height="200px" />
      <Body text="Only join after the Storm Jade joins and after casting Restoring Rain 1 or Dual Strike 2 depending on the strat" />
      <StratRenderer />
      <Navigation prev="/storm1/ixta" next="/storm1/hunhau" />
    </>
  );
};

export default Storm1Autloc;
