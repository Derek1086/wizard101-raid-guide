import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import MythStrat from "../../../components/strats/Stupefy/Myth";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const MythJadeStupefy = () => {
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
          height="150px"
        />
        <CustomImage imgSrc="/EastPuzzle/stupefy.png" alt="" height="150px" />
      </div>
      <Body text="When Fire team is ready for Yetaxa, call out to Fire Jade to 'Spawn Yetaxa' and enter the Stupefy fight" />
      <Body text="On hitting round of Stupefy, let Fire Jade know so they can get ready to pull the fight" />
      <Body text="When you see the Cyclops appear in the leaves of the Myth Scion spell call out to Fire Jade 'Pull Now'" />
      <CustomImage imgSrc="/MythJade/stupefy.png" alt="" height="150px" />
      <MythStrat />
      <Navigation prev="/mythjade/specialcases" next="/mythjade/puzzles" />
    </>
  );
};

export default MythJadeStupefy;