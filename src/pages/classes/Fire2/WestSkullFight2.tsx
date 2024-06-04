import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";
import WestSkull2 from "../../../components/strats/West/WestSkull2";
import SouthPuzzle from "../../../components/Puzzles/SouthPuzzle";

const Fire2WestSkullFight2 = () => {
  return (
    <>
      <Header />
      <Title text="West Skull 2 Fight" />
      <Body text="Head West to Skull 2 Fight with the Fire Jade" />
      <CustomImage
        imgSrc="/WestPuzzle/westskullfight.png"
        alt=""
        height="250px"
      />
      <CustomImage
        imgSrc="/WestPuzzle/skyscreecher.png"
        alt=""
        height="200px"
      />
      <Body text="Join after Fire Jade pulls Sky Screecher" />
      <WestSkull2 />
      <Body
        text="After defeating Sky Screecher, work with Fire
        Jade and Fire 1 to collect the rest of the 4 Death fish if needed"
      />
      <CustomImage imgSrc="/WestPuzzle/deathpond.png" alt="" height="150px" />
      <Navigation prev="/fire2/fishing" next="/fire2/yetaxa" />
      <Title text="Raining West?" />
      <SouthPuzzle />
    </>
  );
};

export default Fire2WestSkullFight2;
