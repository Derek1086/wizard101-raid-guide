import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import CustomImage from "../../../components/CustomImage";
import StratRenderer from "../../../components/strats/Yetaxa/StratRenderer";

const FireJadeYetaxa = () => {
  return (
    <>
      <Header />
      <Title text="Yetaxa Boss Fight" />
      <Body text="Head North and coordinate with Fire 1 and Fire 2 to deposit all Death fish in North, South, and both West Fish n' Wisps" />
      <CustomImage imgSrc="/Yetaxa/fishnwisps.png" alt="" height="200px" />
      <Body text="Ensure all North tokens are set correctly" />
      <Body text="Head to the drum in the middle, and wait for stupefy team to call out when to spawn Yetaxa" />
      <Body text="Head to the back of North IF IT ISNT RAINING NORTH and check what mob spawned" />
      <Body text="It will either be a Coatl (fast) or Sky Crier (slow)" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage imgSrc="/Yetaxa/coatl.png" alt="" height="150px" />
        <CustomImage imgSrc="/Yetaxa/skycrier.png" alt="" height="150px" />
      </div>
      <Body text="If Coatl, let it pass to the top of pyramid before starting Yetaxa" />
      <Body text="When Stupefy team calls to pull, pull the minion first" />
      <StratRenderer />
      <Navigation
        prev="/firejade/westskullfight2"
        next="/firejade/southpulling"
      />
    </>
  );
};

export default FireJadeYetaxa;
