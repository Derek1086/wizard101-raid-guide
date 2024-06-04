import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import FightPov from "../../../components/strats/Hunhau/FightPov";
import StratRenderer from "../../../components/strats/Hunhau/StratRender";

const Storm3Hunhau = () => {
  return (
    <>
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Ixta/ixta-profile.png" alt="" height="200px" />
      <Body text="Press X on the shrine in the middle to polymorph into Ixta. You will gain full health and mana" />
      <Body text="Wait for the Yetaxa Polymorph and work together to defeat the mobs at the top of the pyramid" />
      <br />
      <Body text="Stand on the East drum at the top of the pyramid" />
      <CustomImage imgSrc="/Ixta/drum.png" alt="" height="200px" />
      <Body text="Once Hunhau spawns, let Autloc polymorph pull him" />
      <Body text="Cast Restoring Rain 1 AFTER Myth Jade, Fire 2, and Myth 2 cast their cantrips" />
      <StratRenderer />
      <FightPov />
    </>
  );
};

export default Storm3Hunhau;
