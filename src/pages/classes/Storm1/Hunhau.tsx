import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Storm1Hunhau = () => {
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
        to the fight and cover any cantrips or pullers if they are getting low
        health
      </Typography>
      <Navigation prev="/storm1/autloc" next="/" />
    </>
  );
};

export default Storm1Hunhau;
