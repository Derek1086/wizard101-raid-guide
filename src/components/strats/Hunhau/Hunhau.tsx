import Header from "../../Header";
import Title from "../../Text/Title";
import Body from "../../Text/Body";
import Subtitle from "../../Text/Subtitle";

import HunhauStrat1 from "./Strat1";

const Hunhau = () => {
  return (
    <>
      <Header role="" />
      <div style={{ marginTop: "20px" }}>
        <Title text="Hunhau Main Strat" />
        <Body text="Cantrips (MUST BE SENT IN ORDER)" />
        <Subtitle text="*Polymoprhs join fight*" />
        <br />
        <Subtitle text="Donate Power 2 (Optional)" />
        <Subtitle text="Myth Jade Cast Restoring Rain 3" />
        <Subtitle text="Fire 2 Cast Restoring Rain 1" />
        <Subtitle text="Myth 2 Cast Restoring Rain 1" />
        <Subtitle text="Storm 3 Cast Restoring Rain 1" />
        <br />
        <Subtitle text="*WAIT FOR CALL TO SEND Dual Strikes*" />
        <br />
        <Subtitle text="Myth 1 Case Dual Strike 3" />
        <Subtitle text="Storm 2 Cast Dual Strike 2" />
        <Subtitle text="Fire 1 Cast Dual Strike 1" />
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
            <HunhauStrat1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hunhau;
