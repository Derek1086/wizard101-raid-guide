import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import StratRenderer from "../../../components/strats/Ixta/StratRender";

const Storm2Ixta = () => {
  return (
    <>
      <Title text="Ixta Boss Fight" />
      <CustomImage imgSrc="/Ixta/map.png" alt="" height="200px" />
      <Body text="Only join after Storm 1 joins" />
      <StratRenderer />
      <SouthPuzzle />
    </>
  );
};

export default Storm2Ixta;
