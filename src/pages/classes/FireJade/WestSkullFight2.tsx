import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import WestSkull2 from "../../../components/strats/West/WestSkull2";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const FireJadeWestSkullFight2 = () => {
  return (
    <>
      <Title text="West Skull 2 Fight" />
      <Body text="Head West to Skull 2 Fight" />
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="250px"
      />
      <CustomImage
        imgSrc="/WestPuzzle/skyscreecher.png"
        alt=""
        height="200px"
      />
      <Body text="Pull Sky Screecher and follow strat below" />
      <WestSkull2 />
      <Body text="After defeating Sky Screecher, collect the Crytal Skull and deposit it in the collector" />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage imgSrc="/WestPuzzle/skull.png" alt="" height="100px" />
        <CustomImage
          imgSrc="/WestPuzzle/skullcollector.png"
          alt=""
          height="100px"
        />
      </div>
      <Title text="Raining West?" />
      <SouthPuzzle />
    </>
  );
};

export default FireJadeWestSkullFight2;
