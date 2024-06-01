import Typography from "@mui/material/Typography";

type ClassProps = {
  title: string;
  mainSrc: string;
  itemSrc: string;
  sideSrc: string;
  main: string;
  item: string;
  side: string;
};

const DeckSetup: React.FC<ClassProps> = ({
  title,
  mainSrc,
  itemSrc,
  sideSrc,
  main,
  item,
  side,
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
            width: "33.3%",
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img src={mainSrc} alt="" />
          </div>

          <Typography
            variant="body1"
            component="div"
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
        </div>
        <div
          style={{
            width: "33.4%",
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
            Item Cards
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img src={itemSrc} alt="" />
          </div>

          <Typography
            variant="body1"
            component="div"
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
            width: "33.3%",
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img src={sideSrc} alt="" />
          </div>

          <Typography
            variant="body1"
            component="div"
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
    </>
  );
};

export default DeckSetup;
