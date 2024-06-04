import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import StratRender from "../../../components/strats/Cameca/StratRender";

const MythJadeCameca = () => {
  return (
    <>
      <Title text="Cameca Boss Fight" />
      <Body text="Make sure the turnstiles are set in order of Astral, School Toke, then Wildlife (order is important it can bug if not in the right order)" />
      <CustomImage imgSrc="/Cameca/fishnwisps.png" alt="" height="200px" />
      <Body text="Stand in the middle of the turnstiles where the fight will be, and cast the cantrip 'Reveal Invisible'" />
      <Body text="A drum will spawn, which you will interact with. Make sure to backup right after so you don't get pulled" />
      <StratRender />
    </>
  );
};

export default MythJadeCameca;
