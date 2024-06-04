import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import Storm1Drums from "./Drums";
import Storm1Fishing from "./Fishing";
import Storm1Ixta from "./Ixta";
import Storm1Autloc from "./Autloc";
import Storm1Hunhau from "./Hunhau";

const Storm1 = () => {
  return (
    <>
      <Header role="Storm 1" />
      <BasicTabs
        totalTabs={["Stats", "Drums", "Fishing", "Ixta", "Autloc", "Hunhau"]}
        content={[
          <Stats />,
          <Storm1Drums />,
          <Storm1Fishing />,
          <Storm1Ixta />,
          <Storm1Autloc />,
          <Storm1Hunhau />,
        ]}
      />
    </>
  );
};

export default Storm1;
