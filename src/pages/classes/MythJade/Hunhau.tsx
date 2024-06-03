import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const MythJadeHunhau = () => {
  return (
    <>
      <Header />
      <Title text="Hunhau Boss Fight" />
      <CustomImage imgSrc="/Hunhau/hunhau.jpg" alt="" height="200px" />
      <Body text="Head to the top of the pyramid, and as soon as the first polymorph joins you send your Restoring Rain 3 and call out in chat 'RR3 Sent'" />
      <Body text="Head South and Cover Fire Jade for the South mob" />
      <CustomImage imgSrc="/firejade/southpulling.png" alt="" height="150px" />
      <Navigation prev="/mythjade/cameca" next="/" />
    </>
  );
};

export default MythJadeHunhau;
