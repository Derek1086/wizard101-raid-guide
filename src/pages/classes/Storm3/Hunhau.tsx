import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";
import FightPov from "../../../components/strats/Hunhau/FightPov";
import StratRenderer from "../../../components/strats/Hunhau/StratRender";

const Storm3Hunhau = () => {
  return (
    <>
      <Header />
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Ixta/ixta-profile.png" alt="" height="200px" />
      <Body text="Press X on the shrine in the middle to polymorph into Ixta. You will gain full health and mana" />
      <Body text="Wait for the Yetaxa Polymorph and work together to defeat the mobs at the top of the pyramid" />
      <br />
      <Body text="Stand on the East drum at the top of the pyramid" />
      <CustomImage imgSrc="/Ixta/drum.png" alt="" height="200px" />
      <Body text="Once Hunhau spawns, let Autloc polymorph pull him" />
      <Body text="Cast Restoring Rain 1 AFTER Myth Jade and Fire Jade cast their cantrips" />
      <StratRenderer />
      <Navigation prev="/storm3/ixta" next="/" />
      <FightPov />
    </>
  );
};

export default Storm3Hunhau;
