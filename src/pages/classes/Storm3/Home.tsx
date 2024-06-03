import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import PetReqs from "../../../components/Setups/PetRequirements";
import DeckSetup from "../../../components/Setups/DeckSetup";

const Storm3 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Storm 3 GOATLING"
        mainSrc="Storm3/goat-main-deck.png"
        itemSrc="Storm3/goat-item-deck.png"
        sideSrc="Storm3/goat-side-deck.png"
        main="Cleanse Charm, Storm Scion, Turmoil Oni x2, Lightning Bats, Elemental Blade"
        item="Threefold Fever"
        side="Empower"
        cantrip="Donate Power 3 (Ixta), Restoring Rain 1 (Hunhau)"
      />
      <PetReqs
        title="Storm 3"
        stats="Torrence's Rage"
        imgSrc="/Storm3/pet-talent.png"
      />
      <Navigation prev="/" next="/storm3/drums" />
    </>
  );
};

export default Storm3;
