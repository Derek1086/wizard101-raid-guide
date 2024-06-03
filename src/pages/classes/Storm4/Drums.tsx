import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import CustomImage from "../../../components/CustomImage";
import NorthLeft from "../../../components/strats/North/NorthLeft";

const Storm4Drums = () => {
  return (
    <>
      <Header />
      <EastPuzzle />
      <Navigation prev="/storm4" next="/storm4/northtokenfight" />
      <Title text="Raining East?" />
      <Title text="Token Fight" />
      <CustomImage imgSrc="/NorthPuzzle/tokens.png" alt="" height="250px" />
      <Body text="Head to Left Token 1 fight" />
      <Body text="Join after Support/Puller" />
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
          <NorthLeft />
        </div>
      </div>
    </>
  );
};

export default Storm4Drums;
