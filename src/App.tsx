import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Class from "./components/Class";
import Header from "./components/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        Choose your role
      </Typography>
      <Box
        sx={{
          width: "80%", // 75% width of the screen
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Class imgSrc="/Fire-School.gif" title="Fire Jade" />
        <Class imgSrc="/Fire-School.gif" title="Fire 1" />
        <Class imgSrc="/Fire-School.gif" title="Fire 2" />
        <Class imgSrc="/Myth-School.gif" title="Myth Jade" />
        <Class imgSrc="/Myth-School.gif" title="Myth 1" />
        <Class imgSrc="/Myth-School.gif" title="Myth 2" />
        <Class imgSrc="/Storm-School.gif" title="Storm Jade" />
        <Class imgSrc="/Storm-School.gif" title="Storm 1" />
        <Class imgSrc="/Storm-School.gif" title="Storm 2" />
        <Class imgSrc="/Storm-School.gif" title="Storm 3" />
        <Class imgSrc="/Storm-School.gif" title="Storm 4" />
        <Class imgSrc="/Storm-School.gif" title="Support/Puller" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
