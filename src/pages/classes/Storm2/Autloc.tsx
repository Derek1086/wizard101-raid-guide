import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Autloc/StratRender";

const Storm2Autloc = () => {
  return (
    <>
      <Header />
      <Title text="Autloc Boss Fight" />
      <CustomImage imgSrc="/Autloc/map.png" alt="" height="200px" />
      <Body text="Only join after Storm 1 joins and after casting Dual Strike 1 depending on the strat" />
      <StratRenderer />
      <Navigation prev="/storm2/ixta" next="/storm2/hunhau" />
    </>
  );
};

export default Storm2Autloc;
