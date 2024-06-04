import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import NorthPuzzle from "../../../components/Puzzles/NorthPuzzle";
import NorthRight from "../../../components/strats/North/NorthRight";
import Myth2Fishing from "./Fishing";

const Myth2NorthTokenFight2 = () => {
  return (
    <>
      <NorthPuzzle />
      <Body text="Head to Right Token 2 fight" />
      <Body text="Join after Myth 1" />
      <NorthRight />
      <Title text="Raining North?" />
      <Myth2Fishing />
    </>
  );
};

export default Myth2NorthTokenFight2;
