import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import StratRenderer from "../../../components/strats/Ixta/StratRender";

const StormJadeIxta = () => {
  return (
    <>
      <Title text="Ixta Boss Fight" />
      <CustomImage imgSrc="/Ixta/map.png" alt="" height="200px" />
      <Body text="Pull minion first" />
      <StratRenderer />
      <SouthPuzzle />
    </>
  );
};

export default StormJadeIxta;
