import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

type ClassProps = {
  prev: string;
  next: string;
};
const Navigation: React.FC<ClassProps> = ({ prev, next }) => {
  const navigate = useNavigate();

  return (
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
      <Button
        variant="contained"
        sx={{ width: "20%", height: "70px" }}
        color="secondary"
        size="large"
        onClick={() => navigate(prev)}
        style={{
          color: "white",
          backgroundColor: "#272727",
          fontSize: "calc(0.8em + 0.8vmin)",
        }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        sx={{ width: "20%", height: "70px" }}
        color="secondary"
        size="large"
        onClick={() => navigate(next)}
        style={{
          color: "white",
          backgroundColor: "#272727",
          fontSize: "calc(0.8em + 0.8vmin)",
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Navigation;
