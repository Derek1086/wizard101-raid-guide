import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";

import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Storm2Drums = () => {
  return (
    <>
      <Header />
      <EastPuzzle />
      <Navigation prev="/storm2" next="/storm2/fishing" />
      <Title text="Raining East?" />
      <SouthPuzzle />
    </>
  );
};

export default Storm2Drums;
