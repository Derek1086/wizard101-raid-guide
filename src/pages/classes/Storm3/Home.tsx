import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import Storm3Drums from "./Drums";
import Storm3Fishing from "./Fishing";
import Storm3Ixta from "./Ixta";
import Storm3Hunhau from "./Hunhau";

const Storm3 = () => {
  return (
    <>
      <Header role="Storm 3" />
      <BasicTabs
        totalTabs={["Stats", "Drums", "Fishing", "Ixta", "Hunhau"]}
        content={[
          <Stats />,
          <Storm3Drums />,
          <Storm3Fishing />,
          <Storm3Ixta />,
          <Storm3Hunhau />,
        ]}
      />
    </>
  );
};

export default Storm3;
