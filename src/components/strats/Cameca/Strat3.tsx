import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  mythjade: string,
  fire1: string,
  myth1: string,
  myth2: string
) {
  return { mythjade, fire1, myth1, myth2 };
}

const rows = [
  createData(
    "IC Myth Fuel (Boss)",
    "TC Cleanse (Myth 2)",
    "Myth Trap (Boss)",
    "Mass Myth Trap"
  ),
  createData(
    "Myth Bubble",
    "Spirit Trap (Boss)",
    "Elemental Trap (Boss)",
    "Myth Scion (Boss)"
  ),
  createData(
    "Curse/Hex (Minion)",
    "Fire Trap (Minion)",
    "Spirit Trap (Minion)",
    "Spirit Trap (Minion)"
  ),
  createData(
    "Cleanse/Spirit Trap/Betrayal (Minion)",
    "Fire Jinn (Minion)",
    "Myth Scion (Minion)",
    "Pass"
  ),
];
const CamecaStrat3 = () => {
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
              Myth Jade
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
              Myth 1
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Myth 2
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.mythjade}
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
                {row.mythjade}
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
                  color: "#cccc00",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.myth1}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#cccc00",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.myth2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CamecaStrat3;
