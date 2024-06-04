import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";

const StormJadePulling = () => {
  return (
    <>
      <Title text="North Pulling" />
      <Body text="Head to the North end of the pyramid" />
      <CustomImage imgSrc="/StormJade/northpulling.png" alt="" height="250px" />
      <Body text="It will either be a Coatl or a Sky Crier" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage imgSrc="/Yetaxa/coatl.png" alt="" height="150px" />
        <CustomImage imgSrc="/Yetaxa/skycrier.png" alt="" height="150px" />
      </div>
      <Body text="Pull the mob when it gets close and stall as long as possible" />
      <br />
    </>
  );
};

export default StormJadePulling;
