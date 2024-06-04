import NorthLeft from "./NorthLeft";
import NorthRight from "./NorthRight";
import Header from "../../Header";
import Title from "../../Text/Title";
import CustomImage from "../../CustomImage";

const NorthTokens = () => {
  return (
    <>
      <Header role="" />
      <CustomImage imgSrc="/NorthPuzzle/tokens.png" alt="" height="300px" />
      <Title text="North Left Token 1" />
      <br />
      <NorthLeft />
      <Title text="North Right Token 2" />
      <br />
      <NorthRight />
    </>
  );
};

export default NorthTokens;
