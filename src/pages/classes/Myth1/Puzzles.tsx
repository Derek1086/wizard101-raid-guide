import Header from "../../../components/Header";
import Myth1Fishing from "./Fishing";
import WestPuzzle from "../../../components/Puzzles/WestPuzzle";
import Navigation from "../../../components/Navigation";

const Myth1Puzzles = () => {
  return (
    <>
      <Header />
      <Myth1Fishing />
      <WestPuzzle />
      <Navigation prev="/myth1/northtokenfight" next="/myth1/yetaxa" />
    </>
  );
};

export default Myth1Puzzles;
