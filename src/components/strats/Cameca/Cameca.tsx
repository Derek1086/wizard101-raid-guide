import Header from "../../Header";
import Title from "../../Text/Title";
import Body from "../../Text/Body";
import Subtitle from "../../Text/Subtitle";

import CamecaStrat1 from "./Strat1";
import CamecaStrat2 from "./Strat2";
import CamecaStrat3 from "./Strat3";
import CamecaStrat4 from "./Strat4";

const Cameca = () => {
  return (
    <>
      <Header role="" />
      <div style={{ marginTop: "20px" }}>
        <Title text="Cameca Strat 1" />
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
          <img src="/NotLife.png" alt="NotLife" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Myth 1 or Myth 2 Cast Donate Power 2" />
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
            <CamecaStrat1 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Cameca Strat 2" />
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
          <img src="/Life-School.gif" alt="Life" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Myth 1 Cast Donate Power 2" />
        <Subtitle text="Myth 2 Cast Donate Power 2" />
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
            <CamecaStrat2 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Cameca Strat 3" />
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
          <img src="/NotLife.png" alt="NotLife" height="45px" />
          {"   "}
          AND
          {"    "}
          <img src="/Death-School.gif" alt="Death" height="45px" />
          /
          <img src="/Storm-School.gif" alt="Storm" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Myth 1 or Myth 2 Cast Donate Power 2" />
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
            <CamecaStrat3 />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Title text="Cameca Strat 4" />
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
          <img src="/Life-School.gif" alt="Life" height="45px" />
          {"   "}
          AND
          {"    "}
          <img src="/Death-School.gif" alt="Death" height="45px" />
          /
          <img src="/Storm-School.gif" alt="Storm" height="45px" />
        </div>
        <Body text="Cantrips" />
        <Subtitle text="Myth 1 or Myth 2 Cast Donate Power 2" />
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
            <CamecaStrat4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cameca;
