import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import Fire2Drums from "./Drums";
import FishingFireIce2 from "./Fishing";
import Fire2WestSkullFight2 from "./WestSkullFight2";
import Fire2Yetaxa from "./Yetaxa";
import Fire2Hunhau from "./Hunhau";

const Fire2 = () => {
  return (
    <>
      <Header role="Fire 2" />
      <BasicTabs
        totalTabs={[
          "Stats",
          "Drums",
          "Fishing",
          "West Skull 2",
          "Yetaxa",
          "Hunhau",
        ]}
        content={[
          <Stats />,
          <Fire2Drums />,
          <FishingFireIce2 />,
          <Fire2WestSkullFight2 />,
          <Fire2Yetaxa />,
          <Fire2Hunhau />,
        ]}
      />
    </>
  );
};

export default Fire2;
