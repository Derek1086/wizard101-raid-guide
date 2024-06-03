import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";
import WestSkull2 from "../../../components/strats/West/WestSkull2";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Fire1WestSkullFight2 = () => {
  return (
    <>
      <Header />
      <Title text="West Skull Fight 2" />
      <Body
        text="Head West to Skull 2 Fight, try to fish for 4 Death fish until fire Jade
        and Fire 2 arrives"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <CustomImage
          imgSrc="/WestPuzzle/westskullfight.png"
          alt=""
          height="200px"
        />
        <CustomImage imgSrc="/WestPuzzle/deathpond.png" alt="" height="200px" />
      </div>
      <Body text="Join after Fire Jade pulls Sky Screecher" />
      <CustomImage
        imgSrc="/WestPuzzle/skyscreecher.png"
        alt=""
        height="200px"
      />
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
          <WestSkull2 />
        </div>
      </div>
      <Body text="Go to the death pond and work with Fire Jade and Fire 2 to collect the rest of the 4 Death fish if needed" />
      <Navigation prev="/fire1/drums" next="/fire1/yetaxa" />
      <Title text="Raining West?" />
      <SouthPuzzle />
    </>
  );
};

export default Fire1WestSkullFight2;
