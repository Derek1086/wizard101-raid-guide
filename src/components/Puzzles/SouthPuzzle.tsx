import Title from "../Text/Title";
import Body from "../Text/Body";
import CustomImage from "../CustomImage";

const SouthPuzzle = () => {
  return (
    <>
      <Title text="South Puzzle" />
      <Body text="Tokens must be found in the South and deposited at the southern base of the pyramid where the turnstiles are" />
      <CustomImage imgSrc="/SouthPuzzle/token.png" alt="" height="60px" />
      <Body text="Cast the 'Reveal Invisible' Cantrip in the black numbered spots below to reveal tokens" />
      <CustomImage imgSrc="/SouthPuzzle/map.png" alt="" height="400px" />
      <br />
    </>
  );
};

export default SouthPuzzle;
