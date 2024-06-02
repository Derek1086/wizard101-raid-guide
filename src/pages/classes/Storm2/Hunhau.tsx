import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Storm2Hunhau = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        Hunhau Cantrips
      </Typography>
      <CustomImage imgSrc="/Hunhau/hunhau.jpg" alt="" height="300px" />
      <Typography
        variant="body1"
        component="div"
        color="text.secondary"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        When the polymorphs start Hunhau, wait near the top of the pyramid next
        to the fight and wait for them to call 'send ds'
        <br />
        Storm 2 is responsible for Dual Strike 2, meaning when they call 'send
        ds', you will let Dual Strike 3 go first, then you will cast Dual Strike
        2. After sending Dual Strike 2, call out 'DS2 Sent'
      </Typography>
      <Navigation prev="/storm2/autloc" next="/" />
    </>
  );
};

export default Storm2Hunhau;
