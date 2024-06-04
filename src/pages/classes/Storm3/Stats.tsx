import DeckSetup from "../../../components/Setups/DeckSetup";
import PetReqs from "../../../components/Setups/PetRequirements";

const Stats = () => {
  return (
    <div>
      <DeckSetup
        title="GOATLING"
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
    </div>
  );
};

export default Stats;
