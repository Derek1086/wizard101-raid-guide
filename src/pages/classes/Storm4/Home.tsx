import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import Storm4Drums from "./Drums";
import Storm4NorthTokenFight1 from "./NorthTokenFight";
import Storm4WestSkullFight1 from "./WestSkullFight1";
import Storm4Stupefy from "./Stupefy";
import Storm4Puzzles from "./Puzzles";
import Storm4Autloc from "./Autloc";
import Storm4Hunhau from "./Hunhau";

const Storm4 = () => {
  return (
    <>
      <Header role="Storm 4" />
      <BasicTabs
        totalTabs={[
          "Stats",
          "Drums",
          "North Token Fight",
          "West Skull Fight",
          "Stupefy",
          "Puzzles",
          "Autloc",
          "Hunhau",
        ]}
        content={[
          <Stats />,
          <Storm4Drums />,
          <Storm4NorthTokenFight1 />,
          <Storm4WestSkullFight1 />,
          <Storm4Stupefy />,
          <Storm4Puzzles />,
          <Storm4Autloc />,
          <Storm4Hunhau />,
        ]}
      />
    </>
  );
};

export default Storm4;
