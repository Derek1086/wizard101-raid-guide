import Header from "../../../components/Header";
import WestPuzzle from "../../../components/Puzzles/WestPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import Navigation from "../../../components/Navigation";

const SupportPullerPuzzles = () => {
  return (
    <>
      <Header />
      <WestPuzzle />
      <SouthPuzzle />
      <Navigation
        prev="/supportpuller/stupefy"
        next="/supportpuller/eastpulling"
      />
    </>
  );
};

export default SupportPullerPuzzles;
