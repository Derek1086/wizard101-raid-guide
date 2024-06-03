import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";

import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Fire1Drums = () => {
  return (
    <>
      <Header />
      <EastPuzzle />
      <Navigation prev="/fire1" next="/fire1/westskullfight2" />
      <Title text="Raining East?" />
      <SouthPuzzle />
    </>
  );
};

export default Fire1Drums;
