import Header from "../../Header";
import Title from "../../Text/Title";
import Body from "../../Text/Body";
import Subtitle from "../../Text/Subtitle";

import IxtaStrat1 from "./Strat1";
import IxtaStrat2 from "./Strat2";
import IxtaStrat3 from "./Strat3";
import IxtaGoatStrat1 from "./GoatStrat1";
import IxtaGoatStrat2 from "./GoatStrat2";

const Ixta = () => {
  return (
    <>
      <Header role="" />
      <div style={{ marginTop: "20px" }}>
        <Title text="Ixta Strat 1" />
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
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Storm 1 Cast Donate Power 2" />
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
            <IxtaStrat1 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Ixta Strat 2" />
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
          <img src="/Death-School.gif" alt="Death" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Stupefy Round 1" />
        <Subtitle text="Storm 1 Cast Donate Power 2" />
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
            <IxtaStrat2 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Ixta Strat 3" />
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
          <img src="/Fire-School.gif" alt="Fire" height="45px" />
          <img src="/Death-School.gif" alt="Death" height="45px" />
          {"   "}
          OR
          {"    "}
          <img src="/Death-School.gif" alt="Death" height="45px" />
          <img src="/Life-School.gif" alt="Life" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Stupefy Round 1" />
        <Subtitle text="Storm 3 Cast Donate Power 3" />
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
            <IxtaStrat3 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Ixta Oni Strat 1" />
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
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Storm 1 Cast Donate Power 2" />
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
            <IxtaGoatStrat1 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Ixta Oni Strat 2" />
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
          <img src="/Death-School.gif" alt="Death" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Storm 3 Cast Donate Power 3" />
        <Subtitle text="Storm 1 Cast Donate Power 1" />
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
            <IxtaGoatStrat2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ixta;
