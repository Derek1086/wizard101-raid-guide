import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Storm2Hunhau = () => {
  return (
    <>
      <Header />
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Hunhau/hunhau.jpg" alt="" height="250px" />
      <Body text="Storm 2 is responsible for Dual Strike 2, meaning when they call 'send ds', you will let Dual Strike 3 go first, then you will cast Dual Strike 2. After sending Dual Strike 2, call out 'DS2 Sent'" />
      <Navigation prev="/storm2/autloc" next="/" />
    </>
  );
};

export default Storm2Hunhau;
