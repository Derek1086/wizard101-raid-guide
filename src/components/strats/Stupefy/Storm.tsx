import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Title from "../../Text/Title";
import Body from "../../Text/Body";
import Subtitle from "../../Text/Subtitle";

function createData(supportpuller: string, storm4: string) {
  return { supportpuller, storm4 };
}

const rows = [
  createData("Pet Storm Blade (Storm 4)", "IC Storm Blade (Self)"),
  createData("Elemental Blade (Storm 4)", "Pierce/Cleanse/Galvanic"),
  createData("Elemental Blade (Storm 4)", "Storm Scion"),
];
const StormStrat = () => {
  return (
    <>
      <br />
      <Title text="Storm Stupefy Strat" />
      <Body text="Minion School(s)" />
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <img src="/Fire-school.gif" alt="Fire" height="45px" />
        {"   "}
        OR
        {"    "}
        <img src="/Life-school.gif" alt="Life" height="45px" />
      </div>
      <br />
      <Subtitle text="*Ice/Life mob = IMPOSSIBLE*" />
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Support/Puller
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Storm 4
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.supportpuller}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        color: "#c3c3bb",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {row.supportpuller}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: "#b641e0",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {row.storm4}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default StormStrat;
