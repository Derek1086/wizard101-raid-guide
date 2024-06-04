import Header from "../../Header";
import Title from "../../Text/Title";
import Body from "../../Text/Body";
import Subtitle from "../../Text/Subtitle";
import BasicTabs from "../../Navigation/Tabs";

import YetaxaStrat1 from "./Strat1";
import YetaxaStrat2 from "./Strat2";
import YetaxaStrat3 from "./Strat3";
import YetaxaStrat4 from "./Strat4";

const Yetaxa = () => {
  return (
    <>
      <Header role="Yetaxa" />
      <BasicTabs
        totalTabs={["Strat 1", "Strat 2", "Strat 3", "Strat 4"]}
        content={[
          <div style={{ marginTop: "20px" }}>
            <Title text="Yetaxa Strat 1" />
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
              <img src="/NotFire.png" alt="NotFire" height="45px" />
              {"   "}
              OR
              {"    "}
              <img src="/NotLife.png" alt="NotLife" height="45px" />
            </div>
            <Body text="Cantrips" />
            <Subtitle text="Stupefy Round 1" />
            <Subtitle text="Fire 2 Cast Donate Power 3" />
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
                <YetaxaStrat1 />
              </div>
            </div>
          </div>,
          <div style={{ marginTop: "20px" }}>
            <Title text="Yetaxa Strat 2" />
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
            </div>
            <Body text="Cantrips" />
            <Subtitle text="Stupefy Round 1" />
            <Subtitle text="Fire 1 Cast Donate Power 1" />
            <Subtitle text="Fire 2 Cast Donate Power 3" />
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
                <YetaxaStrat2 />
              </div>
            </div>
          </div>,
          <div style={{ marginTop: "20px" }}>
            <Title text="Yetaxa Strat 3" />
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
            <Subtitle text="Stupefy Round 1" />
            <Subtitle text="Fire 2 Cast Donate Power 3" />
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
                <YetaxaStrat3 />
              </div>
            </div>
          </div>,
          <div style={{ marginTop: "20px" }}>
            <Title text="Yetaxa Strat 4" />
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
              <img src="/Life-School.gif" alt="Life" height="45px" />
              {"   "}
              OR
              {"    "}
              <img src="/Myth-School.gif" alt="Myth" height="45px" />
              <img src="/Life-School.gif" alt="Life" height="45px" />
            </div>
            <Body text="Cantrips" />
            <Subtitle text="Stupefy Round 1" />
            <Subtitle text="Fire 2 Cast Donate Power 3" />
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
                <YetaxaStrat4 />
              </div>
            </div>
          </div>,
        ]}
      />
    </>
  );
};

export default Yetaxa;
