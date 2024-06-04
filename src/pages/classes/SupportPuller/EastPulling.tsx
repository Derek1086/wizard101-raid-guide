import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import CustomImage from "../../../components/CustomImage";

const SupportPullerPulling = () => {
  return (
    <>
      <Title text="East Pulling" />
      <Body text="Head to the East end of the pyramid" />
      <CustomImage
        imgSrc="/SupportPuller/eastpulling.png"
        alt=""
        height="250px"
      />
      <Body text="It will either be a Coatl or a Jaguar" />
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
        <CustomImage imgSrc="/Ixta/jaguar.png" alt="" height="150px" />
      </div>
      <Body text="Pull the mob when it gets close and stall as long as possible" />
      <br />
    </>
  );
};

export default SupportPullerPulling;
