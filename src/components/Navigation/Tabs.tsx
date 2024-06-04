import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type ClassProps = {
  totalTabs: string[];
  content: any[];
};

const BasicTabs: React.FC<ClassProps> = ({ totalTabs, content }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
            centered
            textColor="inherit"
          >
            {totalTabs.map((tab: string, index: number) => (
              <Tab key={tab} label={tab} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
      </Box>
      {content.map((item: any, index: number) => (
        <CustomTabPanel value={value} index={index}>
          {item}
        </CustomTabPanel>
      ))}
    </>
  );
};

export default BasicTabs;
