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
        Get health from North Fish n' Wisps after defeating Yetaxa
        <br />
        Head to the South Fish n' Wisps and deposit the rest of the fish needed
      </Typography>
      <CustomImage imgSrc="/firejade/southpulling.png" alt="" height="250px" />
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
        Once Myth Team spawns Cameca, the south mob portal will open. Wait in
        the south gate in the dirt pile entrace highlighted above. It will
        either be a Coatl or a Crying Sky Mercenary
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage imgSrc="/Yetaxa/coatl.png" alt="" height="200px" />
        <CustomImage imgSrc="/FireJade/mercenary.png" alt="" height="200px" />
      </div>
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
        Once the mob gets close enough, pull it and stall for as long as
        possible. If myth jade cant cover you when you get to low health, try to
        coordinate with someone who doesnt have a Hunhau cantrip, or if
        possible, cover someone else's dual strike cantrip and have them stall
        south mob.
        <br />
        Once you die, you will be sent to jail, coordinate with your teammates
        to free you from jail if you are covering a cantrip for Hunahu.
      </Typography>
      <Navigation prev="/firejade/yetaxa" next="/" />
    </>
  );
};

export default SouthPulling;
