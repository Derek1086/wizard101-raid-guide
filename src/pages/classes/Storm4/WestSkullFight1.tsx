import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import WestSkull1 from "../../../components/strats/West/WestSkull1";
import Navigation from "../../../components/Navigation";

const Storm4WestSkullFight1 = () => {
  return (
    <>
      <Header />
      <Title text="West Skull 1 Fight" />
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="200px"
      />
      <Body text="Join after Support/Puller and follow strat" />
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
      <Navigation prev="/storm4/northtokenfight" next="/storm4/stupefy" />
    </>
  );
};

export default Storm4WestSkullFight1;
