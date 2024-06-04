import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Myth2Fishing from "./Fishing";
import WestSkull1Myth from "../../../components/strats/West/WestSkull1Myth";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Myth2SpecialCases = () => {
  return (
    <>
      <Myth2Fishing />
      <Body text="If Storm team is doing Stupefy do the West Skull 1 fight whenever Myth Jade is ready (Leave skull on the ground for Storm Team to pick up)" />
      <br />
      <Body text="Myth Jade pull mob and follow strat (same as Stupefy)" />
      <WestSkull1Myth />
      <Title text="Raining West?" />
      <SouthPuzzle />
    </>
  );
};

export default Myth2SpecialCases;
