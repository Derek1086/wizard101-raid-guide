import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import MythStrat from "../../../components/strats/Stupefy/Myth";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Myth2Stupefy = () => {
  return (
    <>
      <Header />
      <Title text="Stupefy Fight" />
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
      <Body text="Join after Myth Jade" />
      <MythStrat />
      <Navigation prev="/myth2/specialcases" next="/myth2/puzzles" />
    </>
  );
};

export default Myth2Stupefy;
