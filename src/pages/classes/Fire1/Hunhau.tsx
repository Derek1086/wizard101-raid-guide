import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Fire1Drums = () => {
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
        Fire 1 is responsible for Dual Strike 1, meaning when they call 'send
        ds', you will let Dual Strike 3 go first, then Dual Strike 2 cast, then
        you will cast Dual Strike 1 last
      </Typography>
      <Navigation prev="/fire1/cameca" next="/" />
    </>
  );
};

export default Fire1Drums;
