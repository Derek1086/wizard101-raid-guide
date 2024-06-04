import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import SupportPullerDrums from "./Drums";
import NorthTokenFight1 from "./NorthTokenFight";
import WestSkullFight1 from "./WestSkullFight1";
import SupportPullerStupefy from "./Stupefy";
import SupportPullerPuzzles from "./Puzzles";
import SupportPullerPulling from "./EastPulling";

const SupportPuller = () => {
  return (
    <>
      <Header role="Support/Puller" />
      <BasicTabs
        totalTabs={[
          "Stats",
          "Drums",
          "North Token Fight",
          "West Skull Fight",
          "Stupefy",
          "Puzzles",
          "East Pulling",
        ]}
        content={[
          <Stats />,
          <SupportPullerDrums />,
          <NorthTokenFight1 />,
          <WestSkullFight1 />,
          <SupportPullerStupefy />,
          <SupportPullerPuzzles />,
          <SupportPullerPulling />,
        ]}
      />
    </>
  );
};

export default SupportPuller;
