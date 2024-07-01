import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  firejade: string,
  fire1: string,
  fire2: string,
  myth1: string
) {
  return { firejade, fire1, fire2, myth1 };
}

const rows = [
  createData(
    "IC Fuel (Boss)",
    "Sun Trap (Boss)",
    "Elemental Trap (Boss)",
    "Spirit Trap (Boss)"
  ),
  createData(
    "Fire Bubble",
    "Fire Jinn (Boss)",
    "Fire Jinn (Boss)",
    "Myth Blade (Self)"
  ),
  createData(
    "Bladestorm",
    "IC Fire Blade (Self)",
    "IC Fire Blade (Self)",
    "TC Myth Blade (Self)"
  ),
  createData(
    "TC Spirit Blade (Myth 1)/TC Shatter (Minion)",
    "TC Immolate (Minion)",
    "TC Immolate (Minion)",
    "Myth Jinn (Minion)"
  ),
];
const YetaxaStrat4 = () => {
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
              Fire Jade
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Fire 1
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Fire 2
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Myth 1
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firejade}
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
                {row.firejade}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{
                  color: "#db5c5c",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.fire1}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#db5c5c",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.fire2}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#cccc00",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.myth1}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default YetaxaStrat4;
