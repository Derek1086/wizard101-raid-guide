import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Fire1Hunhau = () => {
  return (
    <>
      <Header />
      <Title text="Hunhau Cantrips" />
      <CustomImage imgSrc="/Hunhau/hunhau.jpg" alt="" height="200px" />
      <Body text="When the polymorphs start Hunhau, wait near the top of the pyramid next to the fight and wait for them to call 'send ds'" />
      <Body text="When they call 'send ds', you will let Dual Strike 3 go first, then Dual Strike 2 cast, then you will cast Dual Strike 1 last. After sending Dual Strike 1, call out 'DS1 Sent'" />
      <Navigation prev="/fire1/cameca" next="/" />
    </>
  );
};

export default Fire1Hunhau;
