type ClassProps = {
  children: any;
  width: string;
};

const Condenser: React.FC<ClassProps> = ({ children, width }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width: "100%",
      }}
    >
      <div style={{ width: width }}>{children}</div>
    </div>
  );
};

export default Condenser;
