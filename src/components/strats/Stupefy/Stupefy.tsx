import MythStrat from "./Myth";
import StormStrat from "./Storm";
import Header from "../../Header";
import CustomImage from "../../CustomImage";

const Stupefy = () => {
  return (
    <>
      <Header role="" />
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
          height="250px"
        />
        <CustomImage imgSrc="/EastPuzzle/stupefy.png" alt="" height="250px" />
      </div>
      <MythStrat />
      <StormStrat />
    </>
  );
};

export default Stupefy;
