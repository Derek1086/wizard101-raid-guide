import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

const drawerWidth = 240;

type ClassProps = {
  children: any;
};

const ClippedDrawer: React.FC<ClassProps> = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar sx={{ justifyContent: "center", padding: "20px" }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h4" component="h1" align="center">
                Viridian Wizards Crying Sky Raid Guide
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box sx={{ overflow: "auto", mt: 10, ml: 2 }}>
            <List>
              {[
                "Stats",
                "Fishing",
                "West Skull 2",
                "Yetaxa",
                "South Pulling",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default ClippedDrawer;
