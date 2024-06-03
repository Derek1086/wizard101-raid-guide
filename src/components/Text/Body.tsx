import Typography from "@mui/material/Typography";

type ClassProps = {
  text: string;
};
const Body: React.FC<ClassProps> = ({ text }) => {
  return (
    <Typography
      variant="body1"
      component="div"
      align="center"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 20% 0px 20%",
      }}
    >
      {text}
    </Typography>
  );
};

export default Body;
