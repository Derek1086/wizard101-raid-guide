import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ p: 2 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Crying Sky Raid
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
