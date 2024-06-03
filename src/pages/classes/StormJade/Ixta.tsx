import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";
import StratRenderer from "../../../components/strats/Ixta/StratRender";

const StormJadeIxta = () => {
  return (
    <>
      <Header />
      <Title text="Ixta Boss Fight" />
      <CustomImage imgSrc="/Ixta/map.png" alt="" height="200px" />
      <Body text="Pull minion first" />
      <StratRenderer />
      <SouthPuzzle />
      <Navigation prev="/stormjade/fishing" next="/stormjade/autloc" />
    </>
  );
};

export default StormJadeIxta;
