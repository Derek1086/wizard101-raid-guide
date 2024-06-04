import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import StormJadeDrums from "./Drums";
import StormJadeFishing from "./Fishing";
import StormJadeIxta from "./Ixta";
import StormJadeAutloc from "./Autloc";
import StormJadePulling from "./NorthPulling";

const StormJade = () => {
  return (
    <>
      <Header role="Storm Jade" />
      <BasicTabs
        totalTabs={["Stats", "Drums", "Fishing", "Ixta", "Autloc", "Pulling"]}
        content={[
          <Stats />,
          <StormJadeDrums />,
          <StormJadeFishing />,
          <StormJadeIxta />,
          <StormJadeAutloc />,
          <StormJadePulling />,
        ]}
      />
    </>
  );
};

export default StormJade;
