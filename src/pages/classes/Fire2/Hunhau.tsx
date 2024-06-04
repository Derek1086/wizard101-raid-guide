import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import FightPov from "../../../components/strats/Hunhau/FightPov";
import StratRenderer from "../../../components/strats/Hunhau/StratRender";

const Fire2Hunhau = () => {
  return (
    <>
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Yetaxa/yetaxa-profile.png" alt="" height="200px" />
      <Body text="Press X on the shrine in the middle to polymorph into Yetaxa. You will gain full health and mana" />
      <Body text="Wait for the Ixta Polymorph and work together to defeat the mobs at the top of the pyramid" />
      <br />
      <Body text="Stand on the North drum at the top of the pyramid" />
      <CustomImage imgSrc="/Yetaxa/drum.png" alt="" height="200px" />
      <Body text="Once Hunhau spawns, let Autloc polymorph pull him" />
      <Body text="Cast Restoring Rain 1 after Myth Jade Cast Restoring Rain 3" />
      <StratRenderer />
      <FightPov />
    </>
  );
};

export default Fire2Hunhau;
