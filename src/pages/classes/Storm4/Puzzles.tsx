import Header from "../../../components/Header";
import WestPuzzle from "../../../components/Puzzles/WestPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import Navigation from "../../../components/Navigation";

const Storm4Puzzles = () => {
  return (
    <>
      <Header />
      <WestPuzzle />
      <SouthPuzzle />
      <Navigation prev="/storm4/stupefy" next="/storm4/autloc" />
    </>
  );
};

export default Storm4Puzzles;
