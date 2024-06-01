import Typography from "@mui/material/Typography";

type ClassProps = { title: string; stats: string };

const RecStats: React.FC<ClassProps> = ({ title, stats }) => {
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        align="center"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        {title} Stat Recommendations
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "65%",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {stats}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default RecStats;
