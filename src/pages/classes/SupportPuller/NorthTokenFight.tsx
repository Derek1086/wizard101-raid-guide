import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import NorthLeft from "../../../components/strats/North/NorthLeft";
import CustomImage from "../../../components/CustomImage";
import WestSkull1 from "../../../components/strats/West/WestSkull1";
import Navigation from "../../../components/Navigation";

const NorthTokenFight1 = () => {
  return (
    <>
      <Header />
      <Title text="Token Fight" />
      <CustomImage imgSrc="/NorthPuzzle/tokens.png" alt="" height="250px" />
      <Body text="Wait for Storm to change" />
      <Body text="Head to Left Token 1 fight" />
      <Body text="Pull mob and follow strat" />
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
      <Navigation
        prev="/supportpuller/drums"
        next="/supportpuller/westskullfight1"
      />
      <Title text="Raining North?" />
      <Title text="West Skull 1 Fight" />
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="200px"
      />
      <Body text="Pull mob and follow strat" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <WestSkull1 />
        </div>
      </div>
    </>
  );
};

export default NorthTokenFight1;
