import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";

const SouthPulling = () => {
  return (
    <>
      <Header />
      <Title text="South Pulling" />
      <Body text="Get health from North Fish n' Wisps after defeating Yetaxa" />
      <Body text="Head to the South Fish n' Wisps and deposit the rest of the fish" />
      <CustomImage imgSrc="/firejade/southpulling.png" alt="" height="250px" />
      <Body text="South portal opens after Cameca is spawned" />
      <Body text="Wait in the south gate in the dirt pile entrace highlighted above" />
      <Body text="It will either be a Coatl or a Crying Sky Mercenary" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage imgSrc="/Yetaxa/coatl.png" alt="" height="150px" />
        <CustomImage imgSrc="/FireJade/mercenary.png" alt="" height="150px" />
      </div>
      <Body text="Pull the mob when it gets close and stall as long as possible" />
      <Body text="If Myth Jade cant cover you when you get to low health, try to coordinate with someone who doesnt have a Hunhau cantrip to cover you" />
      <Navigation prev="/firejade/yetaxa" next="/" />
    </>
  );
};

export default SouthPulling;
