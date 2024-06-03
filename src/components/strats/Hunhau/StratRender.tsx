import Body from "../../Text/Body";

import HunhauStrat1 from "./Strat1";

const StratRenderer = () => {
  return (
    <>
      <Body text="Use Will-casts on Round 1/2 to guarantee pull" />
      <Body text="Discard everything useless in hand" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      ></div>
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
    </>
  );
};

export default StratRenderer;
