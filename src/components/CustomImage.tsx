type ClassProps = {
  imgSrc: string;
  alt: string;
  height: string;
};

const CustomImage: React.FC<ClassProps> = ({ imgSrc, alt, height }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <img
        src={imgSrc}
        alt={alt}
        height={height}
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default CustomImage;
