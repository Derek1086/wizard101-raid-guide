import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRender from "../../../components/strats/Cameca/StratRender";

const Fire1Cameca = () => {
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
        Cameca Boss Fight
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
        Head North and get health from the North Fish n' Wisps
        <br />
        Head south and meetup with Myth jade, Myth 1 and Myth 2
      </Typography>
      <CustomImage imgSrc="/Cameca/fishnwisps.png" alt="" height="200px" />
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
        Get health from South fish n wisps if needed, then wait for the Myth
        Jade to spawn Cameca
        <br />
        For strats 1, 3, and 4, talk with Fire 2 and decide who will cast Donate
        Power 2, for strat 2, Fire 1 and Fire 2 will have to both cast donate
        power 2
      </Typography>
      <StratRender />
      <Navigation prev="/fire1/yetaxa" next="/fire1/hunhau" />
    </>
  );
};

export default Fire1Cameca;
