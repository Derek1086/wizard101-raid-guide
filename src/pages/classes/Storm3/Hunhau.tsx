import Header from "../../../components/Header";
import Typography from "@mui/material/Typography";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";
import FightPov from "../../../components/strats/Hunhau/FightPov";
import StratRenderer from "../../../components/strats/Hunhau/StratRender";

const Storm3Hunhau = () => {
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
        Ixta Polymorph
      </Typography>
      <CustomImage imgSrc="/Ixta/ixta-profile.png" alt="" height="300px" />
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
        After defeating Ixta, a shrine will spawn in the middle of the ring.
        Press X on the shrine to polymorph into Ixta. You will gain full health
        and mana
        <br />
        While waiting for Yetaxa polymorph, finish the South and West puzzles
        <br />
        Wait for the Yetaxa Polymorph and work together to defeat the mobs at
        the top of the pyramid while waiting for the other boss fights to finsih
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
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        To summon Hunhau, you will need to stand on the North drum at the top of
        the pyramid.
      </Typography>
      <CustomImage imgSrc="/Ixta/drum.png" alt="" height="200px" />
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
        }}
      >
        Once all polymorphs are on their respective sigil, Hunhau will spawn.
        Autloc polymorph will pull and the rest will stagger join to cast
        cantrips
      </Typography>
      <StratRenderer />
      <FightPov />
      <Navigation prev="/storm3/ixta" next="/" />
    </>
  );
};

export default Storm3Hunhau;
