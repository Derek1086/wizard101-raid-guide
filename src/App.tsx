import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import FireJade from "./pages/classes/FireJade";
import Fire1 from "./pages/classes/Fire1";
import Fire2 from "./pages/classes/Fire2";
import MythJade from "./pages/classes/MythJade";
import Myth1 from "./pages/classes/Myth1";
import Myth2 from "./pages/classes/Myth2";
import StormJade from "./pages/classes/StormJade";
import Storm1 from "./pages/classes/Storm1";
import Storm2 from "./pages/classes/Storm2";
import Storm3 from "./pages/classes/Storm3";
import Storm4 from "./pages/classes/Storm4";
import SupportPuller from "./pages/classes/SupportPuller";

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
        <Route path="/" element={<Home />} />
        <Route path="/firejade" element={<FireJade />} />
        <Route path="/fire1" element={<Fire1 />} />
        <Route path="/fire2" element={<Fire2 />} />
        <Route path="/mythjade" element={<MythJade />} />
        <Route path="/myth1" element={<Myth1 />} />
        <Route path="/myth2" element={<Myth2 />} />
        <Route path="/stormjade" element={<StormJade />} />
        <Route path="/storm1" element={<Storm1 />} />
        <Route path="/storm2" element={<Storm2 />} />
        <Route path="/storm3" element={<Storm3 />} />
        <Route path="/storm4" element={<Storm4 />} />
        <Route path="/supportpuller" element={<SupportPuller />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
