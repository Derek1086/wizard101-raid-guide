import Header from "../../../components/Header";
import WestPuzzle from "../../../components/Puzzles/WestPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import Navigation from "../../../components/Navigation";

const Myth2Puzzles = () => {
  return (
    <>
      <Header />
      <WestPuzzle />
      <SouthPuzzle />
      <Navigation prev="/myth2/stupefy" next="/myth2/cameca" />
    </>
  );
};

export default Myth2Puzzles;
