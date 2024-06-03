import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const FishingFireIce = () => {
  return (
    <>
      <Header />
      <Title text="Fishing" />
      <Body text="Catch 4 Fire and 4 Ice Fish in the ponds in the top right near drums" />
      <Body
        text="Coordinate with Fire 2 where to deposit Fire and Ice Fish in both West
        and North Fish n' Wisps"
      />
      <CustomImage
        imgSrc="/FireJade/fire-ice-fishing.png"
        alt=""
        height="200px"
      />
      <Navigation prev="/firejade" next="/firejade/westskullfight2" />
      <Title text="Raining East?" />
      <SouthPuzzle />
    </>
  );
};

export default FishingFireIce;
