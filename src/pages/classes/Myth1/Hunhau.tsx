import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Myth1Hunhau = () => {
  return (
    <>
      <Header />
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Hunhau/hunhau.jpg" alt="" height="250px" />
      <Body text="When the polymorphs start Hunhau, wait near the top of the pyramid next to the fight and wait for them to call 'send ds'" />
      <Body text="When they call 'send ds', you will send Dual Strike 3 immediately. After sending Dual Strike 3, call out 'DS3 Sent'" />{" "}
      <Navigation prev="/myth1/cameca" next="/" />
    </>
  );
};

export default Myth1Hunhau;
