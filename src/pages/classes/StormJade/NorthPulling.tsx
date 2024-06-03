import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";

const StormJadePulling = () => {
  return (
    <>
      <Header />
      <Title text="North Pulling" />
      <Body text="Head to the North end of the pyramid" />
      <CustomImage imgSrc="/stormjade/northpulling.png" alt="" height="250px" />
      <Body text="It will either be a Coatl or a Sky Crier" />
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
        <CustomImage imgSrc="/Yetaxa/skycrier.png" alt="" height="150px" />
      </div>
      <Body text="Pull the mob when it gets close and stall as long as possible" />
      <Navigation prev="/stormjade/autloc" next="/" />
    </>
  );
};

export default StormJadePulling;
