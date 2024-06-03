import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import WestSkull1 from "../../../components/strats/West/WestSkull1";
import Navigation from "../../../components/Navigation";

const WestSkullFight1 = () => {
  return (
    <>
      <Header />
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
      <Navigation
        prev="/supportpuller/northtokenfight"
        next="/supportpuller/stupefy"
      />
    </>
  );
};

export default WestSkullFight1;