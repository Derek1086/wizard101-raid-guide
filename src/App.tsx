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
import Fire1 from "./pages/classes/Fire1/Home";
import Fire2 from "./pages/classes/Fire2/Home";

import MythJade from "./pages/classes/MythJade/Home";
import Myth1 from "./pages/classes/Myth1/Home";
import Myth2 from "./pages/classes/Myth2/Home";

import StormJade from "./pages/classes/StormJade/Home";
import Storm1 from "./pages/classes/Storm1/Home";
import Storm2 from "./pages/classes/Storm2/Home";
import Storm3 from "./pages/classes/Storm3/Home";

import Storm4 from "./pages/classes/Storm4/Home";
import SupportPuller from "./pages/classes/SupportPuller/Home";

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
        {/* FIRE 1 */}
        <Route path="/fire1" element={<Fire1 />} />
        {/* FIRE 2 */}
        <Route path="/fire2" element={<Fire2 />} />
        {/* MYTH JADE */}
        <Route path="/mythjade" element={<MythJade />} />
        {/* MYTH 1 */}
        <Route path="/myth1" element={<Myth1 />} />
        {/* MYTH 2 */}
        <Route path="/myth2" element={<Myth2 />} />
        {/* STORM JADE */}
        <Route path="/stormjade" element={<StormJade />} />
        {/* STORM 1 */}
        <Route path="/storm1" element={<Storm1 />} />
        {/* STORM 2 */}
        <Route path="/storm2" element={<Storm2 />} />
        {/* STORM 3 */}
        <Route path="/storm3" element={<Storm3 />} />
        {/* STORM 4 */}
        <Route path="/storm4" element={<Storm4 />} />
        {/* SUPPORT/PULLER */}
        <Route path="/supportpuller" element={<SupportPuller />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
