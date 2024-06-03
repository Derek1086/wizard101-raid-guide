import CustomImage from "../CustomImage";
import Title from "../Text/Title";
import Body from "../Text/Body";
import Subtitle from "../Text/Subtitle";

type ClassProps = {
  title: string;
  mainSrc: string;
  itemSrc: string;
  sideSrc: string;
  main: string;
  item: string;
  side: string;
  cantrip: string;
};

const DeckSetup: React.FC<ClassProps> = ({
  title,
  mainSrc,
  itemSrc,
  sideSrc,
  main,
  item,
  side,
  cantrip,
}) => {
  return (
    <>
      <Title text={`${title} Deck Setup`} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "35%",
          }}
        >
          <Body text="Main Deck" />
          <CustomImage imgSrc={mainSrc} alt="" height="" />
          <Subtitle text={main} />
          <Body text="Item Cards" />
          <CustomImage imgSrc={itemSrc} alt="" height="" />
          <Subtitle text={item} />
        </div>
        <div
          style={{
            width: "35%",
          }}
        >
          <Body text="Side Deck" />
          <CustomImage imgSrc={sideSrc} alt="" height="" />
          <Subtitle text={side} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div>
          <Title text="Cantrips" />
          <Body text={cantrip} />
        </div>
      </div>
    </>
  );
};

export default DeckSetup;
