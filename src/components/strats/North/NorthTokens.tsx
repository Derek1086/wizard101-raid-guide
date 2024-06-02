import NorthLeft from "./NorthLeft";
import NorthRight from "./NorthRight";
import Header from "../../Header";
import Typography from "@mui/material/Typography";

const NorthTokens = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        North Left Token 1
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <NorthLeft />
        </div>
      </div>

      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        North Right Token 2
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <NorthRight />
        </div>
      </div>
    </>
  );
};

export default NorthTokens;
