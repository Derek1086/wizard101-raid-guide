import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import EastPuzzle from "../../../components/Puzzles/EastPuzzle";
import CustomImage from "../../../components/CustomImage";
import NorthLeft from "../../../components/strats/North/NorthLeft";

const Storm4Drums = () => {
  return (
    <>
      <EastPuzzle />
      <Title text="Raining East?" />
      <Title text="Token Fight" />
      <CustomImage imgSrc="/NorthPuzzle/tokens.png" alt="" height="250px" />
      <Body text="Head to Left Token 1 fight" />
      <Body text="Join after Support/Puller" />
      <NorthLeft />
    </>
  );
};

export default Storm4Drums;
