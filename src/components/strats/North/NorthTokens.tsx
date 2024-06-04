import NorthLeft from "./NorthLeft";
import NorthRight from "./NorthRight";
import Header from "../../Header";
import Title from "../../Text/Title";
import CustomImage from "../../CustomImage";

const NorthTokens = () => {
  return (
    <>
      <Header />
      <CustomImage imgSrc="/NorthPuzzle/tokens.png" alt="" height="300px" />
      <Title text="North Left Token 1" />
      <NorthLeft />
      <Title text="North Left Token 2" />
      <NorthRight />
    </>
  );
};

export default NorthTokens;
