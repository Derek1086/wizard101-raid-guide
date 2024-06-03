import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Title from "../../../components/Text/Title";
import DeckSetup from "../../../components/Setups/DeckSetup";
import PetReqs from "../../../components/Setups/PetRequirements";

const Fire2 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Fire 2"
        mainSrc="Fire2/main-deck.png"
        itemSrc="Fire2/item-deck.png"
        sideSrc="Fire2/side-deck.png"
        main="Bernie Notice, Caldera Jinn, Helephant, Spirit Trap, Elemental Trap"
        item="Amulet Blade (+40%), Pet Empower"
        side="Top Path Helephant, Top Path Immolate x2, Top Path Phoenix, Myth Trap"
        cantrip="Donate Power 3 (Yetaxa), Restoring Rain 1 (Hunhau)"
      />
      <PetReqs
        title="Fire 2"
        stats="Bernie's Omen"
        imgSrc="/Fire2/pet-talent.png"
      />
      <Navigation prev="/" next="/fire2/drums" />
      <Title text="Fire 2 POV" />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ThRX6GNYa2o?si=ZIC3vGY-WFBM-hx8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </>
  );
};

export default Fire2;
