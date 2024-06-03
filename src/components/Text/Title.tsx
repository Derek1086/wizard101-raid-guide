import Typography from "@mui/material/Typography";

type ClassProps = {
  text: string;
};
const Title: React.FC<ClassProps> = ({ text }) => {
  return (
    <Typography
      variant="h5"
      component="div"
      align="center"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 20% 0px 20%",
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
