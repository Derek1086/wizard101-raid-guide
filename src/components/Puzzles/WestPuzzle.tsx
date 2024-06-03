import Title from "../Text/Title";
import Body from "../Text/Body";
import CustomImage from "../CustomImage";

const WestPuzzle = () => {
  return (
    <>
      <Title text="West Puzzle" />
      <Body text="Head West and find Cacao Pod's (you can only hold one at a time)" />
      <Body text="Every time you pick up one, deposit it in the pod collector on the West base of the pyramid" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CustomImage imgSrc="/WestPuzzle/pods.png" alt="" height="100px" />
        <CustomImage
          imgSrc="/WestPuzzle/podcollector.png"
          alt=""
          height="100px"
        />
      </div>
    </>
  );
};

export default WestPuzzle;
