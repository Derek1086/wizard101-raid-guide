import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
const MythStrat = () => {
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        Myth Stupefy Strat
      </Typography>
      <Typography
        variant="h6"
        component="div"
        align="center"
        sx={{ flexGrow: 1, marginTop: 2 }}
      >
        Minion School(s)
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        <img src="/NotFire.png" alt="NotFire" height="45px" />
        {"   "}
        OR
        {"    "}
        <img src="/NotLife.png" alt="NotLife" height="45px" />
      </div>
      <Typography
        variant="body1"
        component="div"
        color="text.secondary"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        *Ice/Life mob = IMPOSSIBLE*
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
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
        </div>
      </div>
    </>
  );
};

export default MythStrat;
