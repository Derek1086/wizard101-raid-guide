import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(mythjade: string, myth2: string) {
  return { mythjade, myth2 };
}

const rows = [
  createData("Curse/Hex", "Mass Myth Trap"),
  createData("Myth Fuel", "Myth Trap"),
  createData("Myth Bubble", "Spirit Trap"),
  createData("Spirit Trap", "Cleanse (Self)/Pass"),
  createData("Betrayal", "Myth Scion"),
];
const WestSkull1Myth = () => {
  return (
    <>
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
    </>
  );
};

export default WestSkull1Myth;
