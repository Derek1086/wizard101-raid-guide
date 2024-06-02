import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";

const Storm2Fishing = () => {
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
        Fishing
      </Typography>
      <Typography
        variant="h6"
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
        After completing drums Ixta will spawn on the East end of the pyramid
        <br />A mob will spawn on the back end of East, while waiting for the
        mob to pass by the Ixta fight, fish for 4 Storm Fish
      </Typography>
      <Typography
        variant="h6"
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
        Work with Storm Jade, Storm 1, and Storm 3 to catch 4 Storm Fish from
        the ponds displayed below
        <br />
        Coordinate with your team where to deposit the Storm Fish in South, both
        West and North Fish n' Wisps
      </Typography>
      <CustomImage imgSrc="/Storm2/fishing.png" alt="" height="200px" />
      <Navigation prev="/storm2/drums" next="/storm2/ixta" />
    </>
  );
};

export default Storm2Fishing;
