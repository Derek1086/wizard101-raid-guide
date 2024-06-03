import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import NorthPuzzle from "../../../components/Puzzles/NorthPuzzle";
import NorthRight from "../../../components/strats/North/NorthRight";
import MythJadeFishing from "./Fishing";
import CustomImage from "../../../components/CustomImage";
import Navigation from "../../../components/Navigation";

const NorthTokenFight2 = () => {
  return (
    <>
      <Header />
      <NorthPuzzle />
      <Body text="Head to Right Token 2 fight" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <NorthRight />
        </div>
      </div>
      <Body text="Watch in chat for call of Stupefy East Mob's school by drums team (IF SCHOOL IS LIFE OR FIRE MYTH TEAM CANNOT DO STUPEFY)" />
      <CustomImage imgSrc="/EastPuzzle/stupefy.png" alt="" height="200px" />
      <Navigation prev="/mythjade" next="/mythjade/specialcases" />
      <Title text="Raining North?" />
      <MythJadeFishing />
    </>
  );
};

export default NorthTokenFight2;
