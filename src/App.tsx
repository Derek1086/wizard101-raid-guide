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
import NorthTokenFight2 from "./pages/classes/MythJade/NorthTokenFight";
import MythJadeSpecialCases from "./pages/classes/MythJade/SpecialCases";
import MythJadeStupefy from "./pages/classes/MythJade/Stupefy";
import MythJadePuzzles from "./pages/classes/MythJade/Puzzles";
import MythJadeCameca from "./pages/classes/MythJade/Cameca";
import MythJadeHunhau from "./pages/classes/MythJade/Hunhau";

import Myth1 from "./pages/classes/Myth1/Home";

import Myth2 from "./pages/classes/Myth2/Home";
import Myth2NorthTokenFight2 from "./pages/classes/Myth2/NorthTokenFight";
import Myth2SpecialCases from "./pages/classes/Myth2/SpecialCases";
import Myth2Stupefy from "./pages/classes/Myth2/Stupefy";
import Myth2Puzzles from "./pages/classes/Myth2/Puzzles";
import Myth2Cameca from "./pages/classes/Myth2/Cameca";
import Myth2Hunhau from "./pages/classes/Myth2/Hunhau";

import StormJade from "./pages/classes/StormJade/Home";
import StormJadeDrums from "./pages/classes/StormJade/Drums";
import StormJadeFishing from "./pages/classes/StormJade/Fishing";
import StormJadeIxta from "./pages/classes/StormJade/Ixta";
import StormJadeAutloc from "./pages/classes/StormJade/Autloc";
import StormJadePulling from "./pages/classes/StormJade/NorthPulling";

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

import Storm3 from "./pages/classes/Storm3/Home";
import Storm3Drums from "./pages/classes/Storm3/Drums";
import Storm3Fishing from "./pages/classes/Storm3/Fishing";
import Storm3Ixta from "./pages/classes/Storm3/Ixta";
import Storm3Hunhau from "./pages/classes/Storm3/Hunhau";

import Storm4 from "./pages/classes/Storm4/Home";
import Storm4Drums from "./pages/classes/Storm4/Drums";
import Storm4NorthTokenFight1 from "./pages/classes/Storm4/NorthTokenFight";
import Storm4WestSkullFight1 from "./pages/classes/Storm4/WestSkullFight1";
import Storm4Stupefy from "./pages/classes/Storm4/Stupefy";
import Storm4Puzzles from "./pages/classes/Storm4/Puzzles";
import Storm4Autloc from "./pages/classes/Storm4/Autloc";
import Storm4Hunhau from "./pages/classes/Storm4/Hunhau";

import SupportPuller from "./pages/classes/SupportPuller/Home";
import SupportPullerDrums from "./pages/classes/SupportPuller/Drums";
import NorthTokenFight1 from "./pages/classes/SupportPuller/NorthTokenFight";
import WestSkullFight1 from "./pages/classes/SupportPuller/WestSkullFight1";
import SupportPullerStupefy from "./pages/classes/SupportPuller/Stupefy";
import SupportPullerPuzzles from "./pages/classes/SupportPuller/Puzzles";
import SupportPullerPulling from "./pages/classes/SupportPuller/EastPulling";

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
        <Route
          path="/mythjade/northtokenfight"
          element={<NorthTokenFight2 />}
        />
        <Route
          path="/mythjade/specialcases"
          element={<MythJadeSpecialCases />}
        />
        <Route path="/mythjade/stupefy" element={<MythJadeStupefy />} />
        <Route path="/mythjade/puzzles" element={<MythJadePuzzles />} />
        <Route path="/mythjade/cameca" element={<MythJadeCameca />} />
        <Route path="/mythjade/hunhau" element={<MythJadeHunhau />} />
        {/* MYTH 1 */}
        <Route path="/myth1" element={<Myth1 />} />
        {/* MYTH 2 */}
        <Route path="/myth2" element={<Myth2 />} />
        <Route
          path="/myth2/northtokenfight"
          element={<Myth2NorthTokenFight2 />}
        />
        <Route path="/myth2/specialcases" element={<Myth2SpecialCases />} />
        <Route path="/myth2/stupefy" element={<Myth2Stupefy />} />
        <Route path="/myth2/puzzles" element={<Myth2Puzzles />} />
        <Route path="/myth2/cameca" element={<Myth2Cameca />} />
        <Route path="/myth2/hunhau" element={<Myth2Hunhau />} />
        {/* STORM JADE */}
        <Route path="/stormjade" element={<StormJade />} />
        <Route path="/stormjade/drums" element={<StormJadeDrums />} />
        <Route path="/stormjade/fishing" element={<StormJadeFishing />} />
        <Route path="/stormjade/ixta" element={<StormJadeIxta />} />
        <Route path="/stormjade/autloc" element={<StormJadeAutloc />} />
        <Route path="/stormjade/northpulling" element={<StormJadePulling />} />
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
        {/* STORM 3 */}
        <Route path="/storm3" element={<Storm3 />} />
        <Route path="/storm3/drums" element={<Storm3Drums />} />
        <Route path="/storm3/fishing" element={<Storm3Fishing />} />
        <Route path="/storm3/ixta" element={<Storm3Ixta />} />
        <Route path="/storm3/hunhau" element={<Storm3Hunhau />} />
        {/* STORM 4 */}
        <Route path="/storm4" element={<Storm4 />} />
        <Route path="/storm4/drums" element={<Storm4Drums />} />
        <Route
          path="/storm4/northtokenfight"
          element={<Storm4NorthTokenFight1 />}
        />
        <Route
          path="/storm4/westskullfight1"
          element={<Storm4WestSkullFight1 />}
        />
        <Route path="/storm4/stupefy" element={<Storm4Stupefy />} />
        <Route path="/storm4/puzzles" element={<Storm4Puzzles />} />
        <Route path="/storm4/autloc" element={<Storm4Autloc />} />
        <Route path="/storm4/hunhau" element={<Storm4Hunhau />} />
        {/* SUPPORT/PULLER */}
        <Route path="/supportpuller" element={<SupportPuller />} />
        <Route path="/supportpuller/drums" element={<SupportPullerDrums />} />
        <Route
          path="/supportpuller/northtokenfight"
          element={<NorthTokenFight1 />}
        />
        <Route
          path="/supportpuller/westskullfight1"
          element={<WestSkullFight1 />}
        />
        <Route
          path="/supportpuller/stupefy"
          element={<SupportPullerStupefy />}
        />
        <Route
          path="/supportpuller/puzzles"
          element={<SupportPullerPuzzles />}
        />
        <Route
          path="/supportpuller/eastpulling"
          element={<SupportPullerPulling />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
