import Body from "../../Text/Body";

import HunhauStrat1 from "./Strat1";

const StratRenderer = () => {
  return (
    <>
      <Body text="Use Will-casts on Round 1/2 to guarantee pull" />
      <Body text="Discard everything useless in hand" />
      <HunhauStrat1 />
    </>
  );
};

export default StratRenderer;
