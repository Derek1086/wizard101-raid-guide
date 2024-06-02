import Typography from "@mui/material/Typography";
import CustomImage from "./CustomImage";

type ClassProps = {
  title: string;
  mainSrc: string;
  itemSrc: string;
  sideSrc: string;
  main: string;
  item: string;
  side: string;
  cantrip: string;
};

const DeckSetup: React.FC<ClassProps> = ({
  title,
  mainSrc,
  itemSrc,
  sideSrc,
  main,
  item,
  side,
  cantrip,
}) => {
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
        {title} Deck Setup
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
            width: "35%",
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
            Main Deck
          </Typography>
          <CustomImage imgSrc={mainSrc} alt="" height="" />
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
            }}
          >
            {main}
          </Typography>
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
            Item Cards
          </Typography>
          <CustomImage imgSrc={itemSrc} alt="" height="" />
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
            }}
          >
            {item}
          </Typography>
        </div>
        <div
          style={{
            width: "35%",
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
            Side Deck
          </Typography>
          <CustomImage imgSrc={sideSrc} alt="" height="" />
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
            }}
          >
            {side}
          </Typography>
        </div>
      </div>
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
        <div>
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
            Cantrips
          </Typography>
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
              marginTop: "10px",
            }}
          >
            {cantrip}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default DeckSetup;
