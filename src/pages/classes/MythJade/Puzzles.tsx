import Header from "../../../components/Header";
import WestPuzzle from "../../../components/Puzzles/WestPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import Navigation from "../../../components/Navigation";

const MythJadePuzzles = () => {
  return (
    <>
      <Header />
      <WestPuzzle />
      <SouthPuzzle />
      <Navigation prev="/mythjade/stupefy" next="/mythjade/cameca" />
    </>
  );
};

export default MythJadePuzzles;
