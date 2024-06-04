import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import NorthPuzzle from "../../../components/Puzzles/NorthPuzzle";
import NorthRight from "../../../components/strats/North/NorthRight";
import Myth1Fishing from "./Fishing";

const Myth1NorthTokenFight2 = () => {
  return (
    <>
      <NorthPuzzle />
      <Body text="Head to Right Token 2 fight" />
      <Body text="Join after Myth Jade" />
      <NorthRight />
      <Title text="Raining North?" />
      <Myth1Fishing />
    </>
  );
};

export default Myth1NorthTokenFight2;
