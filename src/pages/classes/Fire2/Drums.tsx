import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";

import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Fire2Drums = () => {
  return (
    <>
      <Header />
      <EastPuzzle />
      <Navigation prev="/fire2" next="/fire2/fishing" />
      <Title text="Raining East?" />
      <SouthPuzzle />
    </>
  );
};

export default Fire2Drums;
