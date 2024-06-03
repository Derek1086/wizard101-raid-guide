import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";
import FightPov from "../../../components/strats/Hunhau/FightPov";
import StratRenderer from "../../../components/strats/Hunhau/StratRender";

const Storm4Hunhau = () => {
  return (
    <>
      <Header />
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Autloc/autloc-profile.png" alt="" height="200px" />
      <Body text="Press X on the shrine in the middle to polymorph into Autloc. You will gain full health and mana" />
      <Body text="Help defeat remaining mobs at the top of the pyramid" />
      <br />
      <Body text="Stand on the West drum at the top of the pyramid" />
      <CustomImage imgSrc="/Autloc/drum.png" alt="" height="200px" />
      <Body text="Once Hunhau spawns, pull him" />
      <StratRenderer />
      <Navigation prev="/storm4/autloc" next="/" />
      <FightPov />
    </>
  );
};

export default Storm4Hunhau;
