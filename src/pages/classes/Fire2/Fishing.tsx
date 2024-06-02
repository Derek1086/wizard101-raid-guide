import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";

const FishingFireIce2 = () => {
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
          padding: "20px",
        }}
      >
        Help the Fire Jade catch 4 Ice Fish in the ponds in the top right near
        drums
        <br />
        Coordinate with Fire Jade where to deposit Fire and Ice Fish in both
        West and North Fish n' Wisps
      </Typography>
      <CustomImage
        imgSrc="/FireJade/fire-ice-fishing.png"
        alt=""
        height="200px"
      />
      <Navigation prev="/fire2/drums" next="/fire2/westskullfight2" />
    </>
  );
};

export default FishingFireIce2;
