import NorthLeft from "./NorthLeft";
import NorthRight from "./NorthRight";
import Header from "../../Header";
import Title from "../../Text/Title";

const NorthTokens = () => {
  return (
    <>
      <Header />
      <Title text="North Left Token 1" />
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
          <NorthLeft />
        </div>
      </div>

      <Title text="North Left Token 2" />
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
          <NorthRight />
        </div>
      </div>
    </>
  );
};

export default NorthTokens;
