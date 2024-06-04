import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import StormStrat from "../../../components/strats/Stupefy/Storm";
import CustomImage from "../../../components/CustomImage";

const Storm4Stupefy = () => {
  return (
    <>
      <Title text="Stupefy Fight" />
      <Body text="*IF MYTH TEAM CANT DO STUPEFY*" />
      <Body text="Head to the corresponding Stupfy Mob. West (Left) or East (Right)" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage
          imgSrc="/WestPuzzle/westskullfight.png"
          alt=""
          height="200px"
        />
        <CustomImage imgSrc="/EastPuzzle/stupefy.png" alt="" height="200px" />
      </div>
      <Body text="Join after Support/Puller" />
      <StormStrat />
    </>
  );
};

export default Storm4Stupefy;
