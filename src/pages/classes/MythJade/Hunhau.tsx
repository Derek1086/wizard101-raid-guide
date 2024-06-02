import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const MythJadeHunhau = () => {
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
        Head to the top of the pyramid, and as soon as the first polymorph joins
        you send your Restoring Rain 3 and call out in chat 'RR3 Sent'
        <br />
        Head South and Cover Fire Jade for the South mob
      </Typography>
      <CustomImage imgSrc="/firejade/southpulling.png" alt="" height="250px" />
      <Navigation prev="/mythjade/cameca" next="/" />
    </>
  );
};

export default MythJadeHunhau;
