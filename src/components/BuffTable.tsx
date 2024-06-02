import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(stat: string, buff: string) {
  return { stat, buff };
}

const rows = [
  createData("Fire", "Blades Only"),
  createData("Life", "Blades Only"),
  createData("Storm", "Blades + Traps"),
  createData("Myth", "Blades + Traps"),
  createData("Balance", "Blades + Traps"),
  createData("Ice", "Traps Only"),
  createData("Death", "Traps Only"),
];

function getColor(stat: string) {
  switch (stat) {
    case "Fire":
      return "#db5c5c";
    case "Myth":
      return "#cccc00";
    case "Ice":
      return "#95b7f5";
    case "Storm":
      return "#b641e0";
    case "Death":
      return "#c3c3bb";
    case "Life":
      return "#90EE90";
    case "Balance":
      return "orange";
    default:
      return "inherit";
  }
}

function getDebuff(stat: string) {
  switch (stat) {
    case "Fire":
      return "No Traps or Shields";
    case "Myth":
      return "No Shield or Weakness";
    case "Ice":
      return "No Blades or Weakness";
    case "Storm":
      return "No DOTS or HOTS";
    case "Death":
      return "No Blades or HOTS";
    case "Life":
      return "No Traps or DOTS";
    case "Balance":
      return "No 9+ Pips";
    default:
      return "";
  }
}

function getIcon(stat: string) {
  switch (stat) {
    case "Fire":
      return "/Fire-School.gif";
    case "Myth":
      return "/Myth-School.gif";
    case "Ice":
      return "/Ice-School.gif";
    case "Storm":
      return "/Storm-School.gif";
    case "Death":
      return "/Death-School.gif";
    case "Life":
      return "/Life-School.gif";
    case "Balance":
      return "/Balance-School.gif";
    default:
      return "/Fire-School.gif";
  }
}
const BuffTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.stat}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: getColor(row.stat),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img height="30px" src={getIcon(row.stat)} alt="" />
                  <div
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {row.stat}
                  </div>
                  <img height="30px" src={getIcon(row.stat)} alt="" />
                </div>
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#c3c3bb",
                }}
              >
                {row.buff}
                <br />
                {getDebuff(row.stat)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BuffTable;
