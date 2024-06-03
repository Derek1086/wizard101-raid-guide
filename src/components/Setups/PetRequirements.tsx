import CustomImage from "../CustomImage";
import Title from "../Text/Title";
import Body from "../Text/Body";

type ClassProps = { title: string; stats: string; imgSrc: string };

const PetReqs: React.FC<ClassProps> = ({ title, stats, imgSrc }) => {
  return (
    <>
      <Title text={`${title} Pet Talent Requirements`} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "65%",
          }}
        >
          <Body text={stats} />
        </div>
      </div>
      <CustomImage imgSrc={imgSrc} alt="" height="250px" />
    </>
  );
};

export default PetReqs;
