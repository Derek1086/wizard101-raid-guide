import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  stormjade: string,
  storm2: string,
  storm1: string,
  storm3: string
) {
  return { stormjade, storm2, storm1, storm3 };
}

const rows = [
  createData(
    "Pet Storm Blade (Storm 1)",
    "Storm Blade (Storm 1)",
    "Elemental Blade (Storm Self)",
    "Elemental Blade (Storm 1)"
  ),
  createData(
    "Storm Bubble",
    "Cleanse (Storm 1)/TC Lightning Bats (Minion)",
    "Storm Scion (Minion)",
    "Energy Transfer (Boss)"
  ),
  createData(
    "TC Storm Blade (Storm 3)",
    "Energy Transfer (Boss)",
    "Cleanse (Storm 3)",
    "IC Storm Blade (Self)"
  ),
  createData(
    "Elemental Blade (Storm 3)",
    "TC Lightning Bats (Boss)",
    "Elemental Blade (Storm 3)",
    "Storm Scion (Boss)"
  ),
];
const IxtaStrat3 = () => {
  return (
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
              Storm Jade
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Storm 2
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Storm 1
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Storm 3
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.stormjade}
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
                {row.stormjade}
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
                {row.storm2}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#b641e0",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.storm1}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#b641e0",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.storm3}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IxtaStrat3;
