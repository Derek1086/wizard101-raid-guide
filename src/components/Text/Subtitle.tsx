import Typography from "@mui/material/Typography";

type ClassProps = {
  text: string;
};
const Subtitle: React.FC<ClassProps> = ({ text }) => {
  return (
    <Typography
      variant="subtitle2"
      component="div"
      color="text.secondary"
      align="center"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 20% 2.5px 20%",
      }}
    >
      {text}
    </Typography>
  );
};

export default Subtitle;
