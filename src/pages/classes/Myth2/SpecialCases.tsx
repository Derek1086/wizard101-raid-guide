import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Myth2Fishing from "./Fishing";
import MythStrat from "../../../components/strats/Stupefy/Myth";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import Navigation from "../../../components/Navigation";

const Myth2SpecialCases = () => {
  return (
    <>
      <Header />
      <Myth2Fishing />
      <Body text="If Storm team is doing Stupefy do the West Skull 1 fight whenever Myth Jade is ready (Leave skull on the ground for Storm Team to pick up)" />
      <MythStrat />
      <Navigation prev="/myth2/northtokenfight" next="/myth2/stupefy" />
      <Title text="Raining West?" />
      <SouthPuzzle />
    </>
  );
};

export default Myth2SpecialCases;