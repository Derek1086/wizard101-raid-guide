import Header from "../../../components/Header";
import Stats from "./Stats";
import BasicTabs from "../../../components/Navigation/Tabs";
import FishingFireIce from "./Fishing";
import FireJadeWestSkullFight2 from "./WestSkullFight2";
import FireJadeYetaxa from "./Yetaxa";
import SouthPulling from "./SouthPulling";

const FireJade = () => {
  return (
    <>
      <Header role="Fire Jade" />
      <BasicTabs
        totalTabs={[
          "Stats",
          "Fishing",
          "West Skull 2",
          "Yetaxa",
          "South Pulling",
        ]}
        content={[
          <Stats />,
          <FishingFireIce />,
          <FireJadeWestSkullFight2 />,
          <FireJadeYetaxa />,
          <SouthPulling />,
        ]}
      />
    </>
  );
};

export default FireJade;
