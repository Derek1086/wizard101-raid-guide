import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  stat: string,
  balance: string,
  death: string,
  life: string,
  myth: string,
  storm: string,
  ice: string,
  fire: string
) {
  return { stat, balance, death, life, myth, storm, ice, fire };
}

const rows = [
  createData(
    "Health",
    "13199",
    "12584",
    "15449",
    "11541",
    "10418",
    "14383",
    "11733"
  ),
  createData(
    "Primary School Accuracy",
    "57",
    "57",
    "56",
    "63",
    "67",
    "57",
    "61"
  ),
  createData("Primary School Pierce", "57", "56", "51", "65", "59", "47", "68"),
  createData(
    "Primary School Damage",
    "190",
    "202",
    "180",
    "195",
    "207",
    "176",
    "195"
  ),
  createData(
    "Primary School Critical",
    "1008",
    "977",
    "907",
    "1055",
    "1161",
    "835",
    "1059"
  ),
  createData(
    "Primary School Pip Conv.",
    "1076",
    "1076",
    "1071",
    "1066",
    "1046",
    "1066",
    "1046"
  ),
  createData("Power Pip", "138", "134", "138", "134", "134", "134", "134"),
  createData("Outgoing Healing", "94", "83", "112", "83", "94", "83", "94"),
  createData("Resist", "76", "78", "74", "75", "56", "85", "62"),
  createData(
    "Storm Block",
    "1522",
    "1567",
    "1590",
    "1455",
    "1391",
    "1644",
    "1492"
  ),
];
const StatTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Level 170 Scaling</TableCell>
            <TableCell
              align="right"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Balance
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Death
            </TableCell>
            <TableCell
              align="right"
              style={{ color: "#90EE90", fontWeight: "bold" }}
            >
              Life
            </TableCell>
            <TableCell
              align="right"
              style={{ color: "yellow", fontWeight: "bold" }}
            >
              Myth
            </TableCell>
            <TableCell
              align="right"
              style={{ color: "#b641e0", fontWeight: "bold" }}
            >
              Storm
            </TableCell>
            <TableCell
              align="right"
              style={{ color: "#95b7f5", fontWeight: "bold" }}
            >
              Ice
            </TableCell>
            <TableCell
              align="right"
              style={{ color: "#db5c5c", fontWeight: "bold" }}
            >
              Fire
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.stat}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.stat}
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "orange", fontWeight: "bold" }}
              >
                {row.balance}
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                {row.death}
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "#90EE90", fontWeight: "bold" }}
              >
                {row.life}
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "yellow", fontWeight: "bold" }}
              >
                {row.myth}
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "#b641e0", fontWeight: "bold" }}
              >
                {row.storm}
              </TableCell>
              <TableCell
                align="right"
                style={{ color: "#95b7f5", fontWeight: "bold" }}
              >
                {row.ice}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: "#db5c5c",
                  fontWeight: "bold",
                }}
              >
                {row.fire}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatTable;
