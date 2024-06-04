import Header from "../../../components/Header";
import BasicTabs from "../../../components/Navigation/Tabs";
import Stats from "./Stats";
import Storm2Drums from "./Drums";
import Storm2Fishing from "./Fishing";
import Storm2Ixta from "./Ixta";
import Storm2Autloc from "./Autloc";
import Storm2Hunhau from "./Hunhau";

const Storm2 = () => {
  return (
    <>
      <Header role="Storm 2" />
      <BasicTabs
        totalTabs={["Stats", "Drums", "Fishing", "Ixta", "Autloc", "Hunhau"]}
        content={[
          <Stats />,
          <Storm2Drums />,
          <Storm2Fishing />,
          <Storm2Ixta />,
          <Storm2Autloc />,
          <Storm2Hunhau />,
        ]}
      />
    </>
  );
};

export default Storm2;
