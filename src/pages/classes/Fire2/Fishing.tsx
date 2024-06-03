import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";

const FishingFireIce2 = () => {
  return (
    <>
      <Header />
      <Title text="Fishing" />
      <Body text="Help the Fire Jade catch 4 Ice Fish" />
      <Body text="Coordinate with Fire Jade where to deposit Fire and Ice Fish in both West and North Fish n' Wisps" />
      <CustomImage
        imgSrc="/FireJade/fire-ice-fishing.png"
        alt=""
        height="150px"
      />
      <Navigation prev="/fire2/drums" next="/fire2/westskullfight2" />
    </>
  );
};

export default FishingFireIce2;
