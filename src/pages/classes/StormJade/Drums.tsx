import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";

import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const StormJadeDrums = () => {
  return (
    <>
      <Header />
      <EastPuzzle />
      <Navigation prev="/stormjade" next="/stormjade/fishing" />
      <Title text="Raining East?" />
      <SouthPuzzle />
    </>
  );
};

export default StormJadeDrums;
