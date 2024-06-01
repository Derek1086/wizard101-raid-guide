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
    "Myth Bubble",
    "TC Spirit Shield (Myth 1)",
    "TC Spirit Shield (Self)",
    "TC Spirit Shield (Self)"
  ),
  createData(
    "TC Stone Colossus (Boss)",
    "TC Spirit Shield (Myth 2)",
    "Myth Jinn (Boss)",
    "Myth Jinn (Boss)"
  ),

  createData(
    "TC Spirit Shield (Myth 1)",
    "TC Spirit Shield (Myth 2)",
    "TC Spirit Shield (Self)",
    "TC Spirit Shield (Self)"
  ),
  createData(
    "TC Donate Power (Myth 1)",
    "TC Donate Power (Myth 2)",
    "Pass",
    "Pass"
  ),
  createData(
    "TC Donate Power (Myth 1)",
    "TC Donate Power (Myth 2)",
    "TC Empower",
    "TC Empower"
  ),
  createData(
    "TC Shatter/Stone Colossus (Minion)",
    "Helephant (Minion)",
    "Myth Jinn (Minion)",
    "Myth Jinn (Minion)"
  ),
];
const CamecaStrat2 = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              style={{
                color: "#808080",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Myth Jade
            </TableCell>
            <TableCell
              align="right"
              style={{
                color: "#808080",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Fire 1
            </TableCell>
            <TableCell
              align="right"
              style={{
                color: "#808080",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Myth 1
            </TableCell>
            <TableCell
              align="right"
              style={{
                color: "#808080",
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
                  color: "white",
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
                  color: "yellow",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {row.myth1}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "yellow",
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

export default CamecaStrat2;
