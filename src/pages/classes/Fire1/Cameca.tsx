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
          padding: "20px",
        }}
      >
        Head north and get health from north fish n wisps, then head south and
        meetup with myth jade, myth 1 and myth 2
      </Typography>
      <CustomImage imgSrc="/Yetaxa/map.png" alt="" height="100px" />
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
        Get health from south fish n wisps if still need, then wait for myth
        jade to spawn cameca
        <br />
        for strats 1, 3, and 4, talk with fire 2 and decide who will cast donate
        power 2, for strat 2, fire 1 and 2 will have to both cast donate power 2
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
        choose minion school to generate strat
      </Typography>
      <StratRender />
      <Navigation prev="/fire1/yetaxa" next="/fire1/hunhau" />
    </>
  );
};

export default Fire1Cameca;
