import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import NorthPuzzle from "../../../components/Puzzles/NorthPuzzle";
import NorthRight from "../../../components/strats/North/NorthRight";
import Myth2Fishing from "./Fishing";
import Navigation from "../../../components/Navigation";

const Myth2NorthTokenFight2 = () => {
  return (
    <>
      <Header />
      <NorthPuzzle />
      <Body text="Head to Right Token 2 fight" />
      <Body text="Join after Myth 1" />
      <NorthRight />
      <Navigation prev="/myth2" next="/myth2/specialcases" />
      <Title text="Raining North?" />
      <Myth2Fishing />
    </>
  );
};

export default Myth2NorthTokenFight2;
