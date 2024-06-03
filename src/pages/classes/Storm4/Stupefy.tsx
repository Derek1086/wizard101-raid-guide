import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import StormStrat from "../../../components/strats/Stupefy/Storm";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const Storm4Stupefy = () => {
  return (
    <>
      <Header />
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
      <Body text="When Fire team is ready for Yetaxa, call out to Fire Jade to 'Spawn Yetaxa' and enter the Stupefy fight" />
      <Body text="On hitting round of Stupefy, let Fire Jade know so they can get ready to pull the fight" />
      <Body text="After all buffs have been used and the Storm Scion begins spinning, call out to Fire Jade 'Pull Now'" />
      <CustomImage imgSrc="/SupportPuller/stupefy.png" alt="" height="150px" />
      <StormStrat />
      <Navigation prev="/storm4/westskullfight1" next="/storm4/puzzles" />
    </>
  );
};

export default Storm4Stupefy;
