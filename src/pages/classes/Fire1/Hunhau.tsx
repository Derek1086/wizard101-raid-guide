import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";

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
        }}
      >
        when the polymorphs start hunhau, wait near the top of the pyramid next
        to the fight and wait for them to call "send ds"
        <br />
        Fire 1 is responsible for dual strike 1, meaning when they call ds, you
        will let ds3 go first, then ds2 cast, then finally, you will cast dual
        strike 1 last
      </Typography>
      <Navigation prev="/fire1/cameca" next="/" />
    </>
  );
};

export default Fire1Drums;
