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
  storm3: string
) {
  return { stormjade, storm1, storm2, storm3 };
}

const rows = [
  createData(
    "Storm Bubble",
    "Threefold (Boss)",
    "Threefold (Boss)",
    "Threefold (Boss)"
  ),
  createData(
    "Cleanse (Storm 1)",
    "Turmoil Oni (Boss)",
    "Cleanse (Storm 3)",
    "Turmoil Oni (Boss)"
  ),
  createData(
    "Donate Power (Storm 3)",
    "Threefold (Minion)",
    "Threefold (Minion)",
    "TC Empower"
  ),
  createData(
    "TC Threefold",
    "Cleanse (Storm 2)",
    "Turmoil Oni (Minion)",
    "Turmoil Oni (Minion)"
  ),
];
const IxtaGoatStrat2 = () => {
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
                {row.storm3}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IxtaGoatStrat2;
