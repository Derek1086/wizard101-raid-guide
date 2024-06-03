import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";

const StormJadeFishing = () => {
  return (
    <>
      <Header />
      <Title text="Fishing" />
      <Body text="Fish for 1 Storm Fish while waiting for the mob to pass by the Ixta fight, " />
      <Body
        text="Coordinate with your team where to deposit the Storm Fish in South,
        North and both West Fish n' Wisps"
      />
      <CustomImage imgSrc="/Storm2/fishing.png" alt="" height="200px" />
      <Navigation prev="/stormjade/drums" next="/stormjade/ixta" />
    </>
  );
};

export default StormJadeFishing;
