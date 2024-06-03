import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";

import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Storm1Drums = () => {
  return (
    <>
      <Header />
      <EastPuzzle />
      <Navigation prev="/storm1" next="/storm1/fishing" />
      <Title text="Raining East?" />
      <SouthPuzzle />
    </>
  );
};

export default Storm1Drums;
