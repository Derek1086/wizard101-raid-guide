import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import MythJadeFishing from "./Fishing";
import WestSkull1Myth from "../../../components/strats/West/WestSkull1Myth";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const MythJadeSpecialCases = () => {
  return (
    <>
      <Header />
      <MythJadeFishing />
      <Body text="On the way to Myth Pond in West, check for Stupefy West Mob's school (IF SCHOOL IS LIFE OR FIRE MYTH TEAM CANNOT DO STUPEFY)" />
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="200px"
      />
      <Body text="If you can't do East and West Stupefy, notify Support/Puller and Storm 4 to do Stupefy instead" />
      <Body text="If Storm team is doing Stupefy do the West Skull 1 fight whenever Myth 2 is ready (Leave skull on the ground for Storm Team to pick up)" />
      <br />
      <Body text="Pull mob and follow strat (same as Stupefy)" />
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
          <WestSkull1Myth />
        </div>
      </div>
      <Navigation prev="/mythjade/northtokenfight" next="/mythjade/stupefy" />
      <Title text="Raining West?" />
      <SouthPuzzle />
    </>
  );
};

export default MythJadeSpecialCases;
