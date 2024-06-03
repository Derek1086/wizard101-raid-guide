import Header from "../../Header";
import Title from "../../Text/Title";
import Body from "../../Text/Body";
import Subtitle from "../../Text/Subtitle";

import AutlocStrat1 from "./Strat1";
import AutlocStrat2 from "./Strat2";
import AutlocOniStrat1 from "./OniStrat1";
import AutlocOniStrat2 from "./OniStrat2";

const Autloc = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "20px" }}>
        <Title text="Autloc  Strat 1" />
        <Body text="Minion School(s)" />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <img src="/NotDeath.png" alt="NotDeath" height="45px" />
          {"   "}
          OR
          {"    "}
          <img src="/NotIce.png" alt="NotIce" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Storm 4 Cast Donate Power 2" />
        <Subtitle text="Storm 1 Cast Restoring Rain 1" />
        <Subtitle text="Plague if = Storm" />
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
            <AutlocStrat1 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Autloc Strat 2" />
        <Body text="Minion School(s)" />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <img src="/Death-school.gif" alt="Death" height="45px" />
          {"   "}
          OR
          {"    "}
          <img src="/Ice-school.gif" alt="Ice" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Storm 4 Cast Donate Power 3" />
        <Subtitle text="Storm 1 Cast Dual Strike 2" />
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
            <AutlocStrat2 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Autloc Oni Strat 1" />
        <Body text="Minion School(s)" />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <img src="/NotDeath.png" alt="NotDeath" height="45px" />
          {"   "}
          OR
          {"    "}
          <img src="/NotIce.png" alt="NotIce" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Storm 4 Cast Donate Power 2" />
        <Subtitle text="Storm 1 Cast Restoring Rain 1" />
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
            <AutlocOniStrat1 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Autloc Oni Strat 2" />
        <Body text="Minion School(s)" />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <img src="/Death-school.gif" alt="Death" height="45px" />
          {"   "}
          OR
          {"    "}
          <img src="/Ice-school.gif" alt="Ice" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Storm 4 Cast Donate Power 3" />
        <Subtitle text="Storm 1 Cast Dual Strike 2" />
        <Subtitle text="Storm 2 Cast Dual Strike 1" />
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
            <AutlocOniStrat2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Autloc;
