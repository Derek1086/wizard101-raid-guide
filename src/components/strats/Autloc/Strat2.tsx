import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  stormjade: string,
  storm1: string,
  storm2: string,
  storm4: string
) {
  return { stormjade, storm1, storm2, storm4 };
}

const rows = [
  createData(
    "Storm Bubble",
    "Storm Trap (Boss)",
    "Elemental Trap (Boss)",
    "Cleanse (Self)"
  ),
  createData(
    "TC Shatter (Boss)",
    "TC Curse/Hex (Boss)",
    "TC Storm Trap (Boss)",
    "Storm Owl (Boss)"
  ),
  createData(
    "TC Cleanse (Storm 2)/TC Shatter (Minion)",
    "TC Lightning Bats (Minion)",
    "Cleanse (Self)/Storm Trap (Minion)",
    "Mass Storm Trap"
  ),
  createData(
    "Curse/Hex (Minion)",
    "Storm Scion (Minion)",
    "Storm Scion (Minion)",
    "TC Lightning Bats (Minion)"
  ),
];
const AutlocStrat2 = () => {
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
              Storm 1
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
              Storm 4
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
                {row.storm4}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AutlocStrat2;
