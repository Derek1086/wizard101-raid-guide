import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Condenser from "../../Condenser";

function createData(
  autloc: string,
  yetaxa: string,
  ixta: string,
  cameca: string
) {
  return { autloc, yetaxa, ixta, cameca };
}

const rows = [
  createData(
    "Elemental Trap/0-pip Counter",
    "Elemental Trap/0-pip Counter - WC Bernie",
    "0-pip Counter - WC Torrence",
    "0-pip Counter - WC Torrence"
  ),
  createData(
    "Elemental Trap/0-pip Counter",
    "Elemental Trap/0-pip Counter - WC Bernie",
    "0-pip Counter - WC Torrence",
    "0-pip Counter - WC Torrence"
  ),
  createData(
    "Elemental Trap/0-pip Counter",
    "Bernie's Omen",
    "Storm Scion",
    "Storm Scion"
  ),
];
const HunhauStrat1 = () => {
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
                  Autloc
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Yetaxa
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Ixta
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Cameca
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.autloc}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color: "#b641e0",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {row.autloc}
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
                    {row.yetaxa}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: "#b641e0",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {row.ixta}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: "#cccc00",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {row.cameca}
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

export default HunhauStrat1;
