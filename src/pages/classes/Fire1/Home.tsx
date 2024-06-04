import Header from "../../../components/Header";
import Stats from "./Stats";
import BasicTabs from "../../../components/Navigation/Tabs";
import Fire1Drums from "./Drums";
import Fire1WestSkullFight2 from "./WestSkullFight2";
import Fire1Yetaxa from "./Yetaxa";
import Fire1Cameca from "./Cameca";
import Fire1Hunhau from "./Hunhau";

const Fire1 = () => {
  return (
    <>
      <Header role="Fire 1" />
      <BasicTabs
        totalTabs={[
          "Stats",
          "Drums",
          "West Skull 2",
          "Yetaxa",
          "Cameca",
          "Hunhau",
        ]}
        content={[
          <Stats />,
          <Fire1Drums />,
          <Fire1WestSkullFight2 />,
          <Fire1Yetaxa />,
          <Fire1Cameca />,
          <Fire1Hunhau />,
        ]}
      />
    </>
  );
};

export default Fire1;
