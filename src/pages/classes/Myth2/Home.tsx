import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import Myth2NorthTokenFight2 from "./NorthTokenFight";
import Myth2SpecialCases from "./SpecialCases";
import Myth2Stupefy from "./Stupefy";
import Myth2Puzzles from "./Puzzles";
import Myth2Cameca from "./Cameca";
import Myth2Hunhau from "./Hunhau";

const Myth2 = () => {
  return (
    <>
      <Header role="Myth 2" />
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
          <Myth2NorthTokenFight2 />,
          <Myth2SpecialCases />,
          <Myth2Stupefy />,
          <Myth2Puzzles />,
          <Myth2Cameca />,
          <Myth2Hunhau />,
        ]}
      />
    </>
  );
};

export default Myth2;
