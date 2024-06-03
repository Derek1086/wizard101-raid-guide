import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Storm1Hunhau = () => {
  return (
    <>
      <Header />
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Hunhau/hunhau.jpg" alt="" height="250px" />
      <Body text="Wait near the top of the pyramid and cover any cantrips or pullers if they are getting low health" />
      <Navigation prev="/storm1/autloc" next="/" />
    </>
  );
};

export default Storm1Hunhau;
