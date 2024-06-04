import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import NorthTokenFight2 from "./NorthTokenFight";
import MythJadeSpecialCases from "./SpecialCases";
import MythJadeStupefy from "./Stupefy";
import MythJadePuzzles from "./Puzzles";
import MythJadeCameca from "./Cameca";
import MythJadeHunhau from "./Hunhau";

const MythJade = () => {
  return (
    <>
      <Header role="Myth Jade" />
      <BasicTabs
        totalTabs={[
          "Stats",
          "North Token Fight",
          "Special Cases",
          "Stupefy",
          "Puzzles",
          "Cameca",
          "Hunhau",
        ]}
        content={[
          <Stats />,
          <NorthTokenFight2 />,
          <MythJadeSpecialCases />,
          <MythJadeStupefy />,
          <MythJadePuzzles />,
          <MythJadeCameca />,
          <MythJadeHunhau />,
        ]}
      />
    </>
  );
};

export default MythJade;
