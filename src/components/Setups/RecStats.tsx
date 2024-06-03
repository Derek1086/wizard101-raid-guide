import Title from "../Text/Title";
import Body from "../Text/Body";

type ClassProps = { title: string; stats: string };

const RecStats: React.FC<ClassProps> = ({ title, stats }) => {
  return (
    <>
      <Title text={`${title} Stat Recommendations`} />
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
    </>
  );
};

export default RecStats;
