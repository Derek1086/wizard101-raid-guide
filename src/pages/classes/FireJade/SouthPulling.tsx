import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";

import CustomImage from "../../../components/CustomImage";

const SouthPulling = () => {
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
        South Pulling
      </Typography>
      <CustomImage imgSrc="/FireJade/pulling.png" alt="" height="100px" />
      <Typography
        variant="h5"
        component="div"
        color="text.secondary"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        Get health from north fish n wisps after yetaxa, then go south and wait
        for cameca team to form up to deposit rest of the fish in south fish n
        wisps.
        <br />
        once they spawn cameca, wait in the south gate in the dirt pile entrace,
        and wait for the mob. once the mob is close enough, pull the mob and
        stall as long as possible.
        <br />
        if myth jade cant cover you when you die, try to coordinate with someone
        who doesnt have a hunhau cantrip, or if possible, cover someone else's
        dual strike cantrip
      </Typography>
      <Navigation prev="/firejade/yetaxa" next="/" />
    </>
  );
};

export default SouthPulling;
