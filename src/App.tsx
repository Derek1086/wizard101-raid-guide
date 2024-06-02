import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Yetaxa from "./components/strats/Yetaxa/Yetaxa";
import Cameca from "./components/strats/Cameca/Cameca";
import Ixta from "./components/strats/Ixta/Ixta";
import Autloc from "./components/strats/Autloc/Autloc";
import Hunhau from "./components/strats/Hunhau/Hunhau";
import Stupefy from "./components/strats/Stupefy/Stupefy";
import WestSkull from "./components/strats/West/WestSkull";
import NorthTokens from "./components/strats/North/NorthTokens";

import FireJade from "./pages/classes/FireJade/Home";
import FishingFireIce from "./pages/classes/FireJade/Fishing";
import FireJadeWestSkullFight2 from "./pages/classes/FireJade/WestSkullFight2";
import FireJadeYetaxa from "./pages/classes/FireJade/Yetaxa";
import SouthPulling from "./pages/classes/FireJade/SouthPulling";

import Fire1 from "./pages/classes/Fire1/Home";
import Fire1Drums from "./pages/classes/Fire1/Drums";
import Fire1WestSkullFight2 from "./pages/classes/Fire1/WestSkullFight2";
import Fire1Yetaxa from "./pages/classes/Fire1/Yetaxa";
import Fire1Cameca from "./pages/classes/Fire1/Cameca";
import Fire1Hunhau from "./pages/classes/Fire1/Hunhau";

import Fire2 from "./pages/classes/Fire2/Home";
import Fire2Drums from "./pages/classes/Fire2/Drums";
import FishingFireIce2 from "./pages/classes/Fire2/Fishing";
import Fire2WestSkullFight2 from "./pages/classes/Fire2/WestSkullFight2";
import Fire2Yetaxa from "./pages/classes/Fire2/Yetaxa";
import Fire2Hunhau from "./pages/classes/Fire2/Hunhau";

import MythJade from "./pages/classes/MythJade/Home";
import NorthTokenFight from "./pages/classes/MythJade/NorthTokenFight";
import MythJadeSpecialCases from "./pages/classes/MythJade/SpecialCases";
import MythJadeStupefy from "./pages/classes/MythJade/Stupefy";
import MythJadePuzzles from "./pages/classes/MythJade/Puzzles";
import MythJadeCameca from "./pages/classes/MythJade/Cameca";
import MythJadeHunhau from "./pages/classes/MythJade/Hunhau";

import Myth1 from "./pages/classes/Myth1/Myth1";
import Myth2 from "./pages/classes/Myth2/Myth2";
import StormJade from "./pages/classes/StormJade/StormJade";

import Storm1 from "./pages/classes/Storm1/Home";
import Storm1Drums from "./pages/classes/Storm1/Drums";
import Storm1Fishing from "./pages/classes/Storm1/Fishing";
import Storm1Ixta from "./pages/classes/Storm1/Ixta";
import Storm1Autloc from "./pages/classes/Storm1/Autloc";
import Storm1Hunhau from "./pages/classes/Storm1/Hunhau";

import Storm2 from "./pages/classes/Storm2/Home";
import Storm2Drums from "./pages/classes/Storm2/Drums";
import Storm2Fishing from "./pages/classes/Storm2/Fishing";
import Storm2Ixta from "./pages/classes/Storm2/Ixta";
import Storm2Autloc from "./pages/classes/Storm2/Autloc";
import Storm2Hunhau from "./pages/classes/Storm2/Hunhau";

import Storm3 from "./pages/classes/Storm3/Storm3";
import Storm4 from "./pages/classes/Storm4/Storm4";
import SupportPuller from "./pages/classes/SupportPuller/SupportPuller";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        {/* MAIN BOSSES AND STRATS FOR ALL FIGHTS */}
        <Route path="/" element={<Home />} />
        <Route path="/yetaxa" element={<Yetaxa />} />
        <Route path="/cameca" element={<Cameca />} />
        <Route path="/ixta" element={<Ixta />} />
        <Route path="/autloc" element={<Autloc />} />
        <Route path="/hunhau" element={<Hunhau />} />
        <Route path="/stupefy" element={<Stupefy />} />
        <Route path="/west" element={<WestSkull />} />
        <Route path="/north" element={<NorthTokens />} />
        {/* FIRE JADE */}
        <Route path="/firejade" element={<FireJade />} />
        <Route path="/firejade/fishing" element={<FishingFireIce />} />
        <Route
          path="/firejade/westskullfight2"
          element={<FireJadeWestSkullFight2 />}
        />
        <Route path="/firejade/yetaxa" element={<FireJadeYetaxa />} />
        <Route path="/firejade/southpulling" element={<SouthPulling />} />
        {/* FIRE 1 */}
        <Route path="/fire1" element={<Fire1 />} />
        <Route path="/fire1/drums" element={<Fire1Drums />} />
        <Route
          path="/fire1/westskullfight2"
          element={<Fire1WestSkullFight2 />}
        />
        <Route path="/fire1/yetaxa" element={<Fire1Yetaxa />} />
        <Route path="/fire1/cameca" element={<Fire1Cameca />} />
        <Route path="/fire1/hunhau" element={<Fire1Hunhau />} />
        {/* FIRE 2 */}
        <Route path="/fire2" element={<Fire2 />} />
        <Route path="/fire2/drums" element={<Fire2Drums />} />
        <Route
          path="/fire2/westskullfight2"
          element={<Fire2WestSkullFight2 />}
        />
        <Route path="/fire2/fishing" element={<FishingFireIce2 />} />
        <Route path="/fire2/yetaxa" element={<Fire2Yetaxa />} />
        <Route path="/fire2/hunhau" element={<Fire2Hunhau />} />
        {/* MYTH JADE */}
        <Route path="/mythjade" element={<MythJade />} />
        <Route path="/mythjade/northtokenfight" element={<NorthTokenFight />} />
        <Route
          path="/mythjade/specialcases"
          element={<MythJadeSpecialCases />}
        />
        <Route path="/mythjade/stupefy" element={<MythJadeStupefy />} />
        <Route path="/mythjade/puzzles" element={<MythJadePuzzles />} />
        <Route path="/mythjade/cameca" element={<MythJadeCameca />} />
        <Route path="/mythjade/hunhau" element={<MythJadeHunhau />} />

        <Route path="/myth1" element={<Myth1 />} />
        <Route path="/myth2" element={<Myth2 />} />
        <Route path="/stormjade" element={<StormJade />} />
        {/* STORM 1 */}
        <Route path="/storm1" element={<Storm1 />} />
        <Route path="/storm1/drums" element={<Storm1Drums />} />
        <Route path="/storm1/fishing" element={<Storm1Fishing />} />
        <Route path="/storm1/ixta" element={<Storm1Ixta />} />
        <Route path="/storm1/autloc" element={<Storm1Autloc />} />
        <Route path="/storm1/hunhau" element={<Storm1Hunhau />} />
        {/* STORM 2 */}
        <Route path="/storm2" element={<Storm2 />} />
        <Route path="/storm2/drums" element={<Storm2Drums />} />
        <Route path="/storm2/fishing" element={<Storm2Fishing />} />
        <Route path="/storm2/ixta" element={<Storm2Ixta />} />
        <Route path="/storm2/autloc" element={<Storm2Autloc />} />
        <Route path="/storm2/hunhau" element={<Storm2Hunhau />} />

        <Route path="/storm3" element={<Storm3 />} />
        <Route path="/storm4" element={<Storm4 />} />
        <Route path="/supportpuller" element={<SupportPuller />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
