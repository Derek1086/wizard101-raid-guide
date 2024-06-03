import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import NorthPuzzle from "../../../components/Puzzles/NorthPuzzle";
import NorthRight from "../../../components/strats/North/NorthRight";
import Myth1Fishing from "./Fishing";
import Navigation from "../../../components/Navigation";

const Myth1NorthTokenFight2 = () => {
  return (
    <>
      <Header />
      <NorthPuzzle />
      <Body text="Head to Right Token 2 fight" />
      <Body text="Join after Myth Jade" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <NorthRight />
        </div>
      </div>
      <Navigation prev="/myth1" next="/myth1/puzzles" />
      <Title text="Raining North?" />
      <Myth1Fishing />
    </>
  );
};

export default Myth1NorthTokenFight2;
