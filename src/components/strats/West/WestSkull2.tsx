import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Condenser from "../../Condenser";

function createData(firejade: string, fire1: string, fire2: string) {
  return { firejade, fire1, fire2 };
}

const rows = [
  createData("Fire Bubble", "Pass", "Pass"),
  createData("Immolate", "Pass", "Pass"),
  createData("Fire Elf", "Fire Scion", "Fire Scion"),
  createData("Pass", "Immolate", "Immolate"),
];
const WestSkull2 = () => {
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

export default WestSkull2;
