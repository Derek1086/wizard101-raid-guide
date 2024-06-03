import Title from "../../Text/Title";

const FightPov = () => {
  return (
    <>
      <Title text="Hunhau Fight POV" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OXQ4TVpvu38?si=AKcW5aLVjTUVapN3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </>
  );
};

export default FightPov;
