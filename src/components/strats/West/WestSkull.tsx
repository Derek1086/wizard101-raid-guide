import WestSkull1 from "./WestSkull1";
import WestSkull2 from "./WestSkull2";
import WestSkull1Myth from "./WestSkull1Myth";
import Header from "../../Header";
import Title from "../../Text/Title";

const WestSkull = () => {
  return (
    <>
      <Header />
      <Title text="West Skull 1" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <WestSkull1 />
        </div>
      </div>
      <Title text="West Skull 1 (Myth Team)" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <WestSkull1Myth />
        </div>
      </div>
      <Title text="West Skull 2" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <div style={{ width: "70%" }}>
          <WestSkull2 />
        </div>
      </div>
    </>
  );
};

export default WestSkull;
