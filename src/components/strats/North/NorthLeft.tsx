import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Condenser from "../../Condenser";

function createData(supportpuller: string, storm4: string) {
  return { supportpuller, storm4 };
}

const rows = [
  createData("Pet Storm Blade (Storm 4)", "IC Storm Blade (Self)"),
  createData("IC Star Blade (Storm 4)", "Pierce/Cleanse/Pass"),
  createData("Elemental Blade (Storm 4)", "Elemental Blade (Self)"),
  createData(
    "Pass if players have turn priority",
    "Pass if players have turn priority"
  ),
  createData("Wand hit", "Storm Scion"),
];
const NorthLeft = () => {
  return (
    <Condenser
      children={
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
                      color: "#90EE90",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {row.supportpuller}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
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
      }
      width="70%"
    />
  );
};

export default NorthLeft;
