import Typography from "@mui/material/Typography";
import CustomImage from "./CustomImage";

type ClassProps = { title: string; stats: string; imgSrc: string };

const PetReqs: React.FC<ClassProps> = ({ title, stats, imgSrc }) => {
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
        {title} Pet Talent Requirements
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
            color="text.secondary"
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
      <CustomImage imgSrc={imgSrc} alt="" height="250px" />
    </>
  );
};

export default PetReqs;
