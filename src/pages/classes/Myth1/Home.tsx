import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import Myth1NorthTokenFight2 from "./NorthTokenFight";
import Myth1Puzzles from "./Puzzles";
import Myth1Yetaxa from "./Yetaxa";
import Myth1Cameca from "./Cameca";
import Myth1Hunhau from "./Hunhau";

const Myth1 = () => {
  return (
    <>
      <Header role="Myth 1" />
      <BasicTabs
        totalTabs={[
          "Stats",
          "North Token Fight",
          "Puzzles",
          "Yetaxa",
          "Cameca",
          "Hunhau",
        ]}
        content={[
          <Stats />,
          <Myth1NorthTokenFight2 />,
          <Myth1Puzzles />,
          <Myth1Yetaxa />,
          <Myth1Cameca />,
          <Myth1Hunhau />,
        ]}
      />
    </>
  );
};

export default Myth1;
