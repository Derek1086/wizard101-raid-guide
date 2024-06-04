import DeckSetup from "../../../components/Setups/DeckSetup";
import PetReqs from "../../../components/Setups/PetRequirements";

const Stats = () => {
  return (
    <div>
      <DeckSetup
        title=""
        mainSrc="Myth2/main-deck.png"
        itemSrc="Myth2/item-deck.png"
        sideSrc="Myth2/side-deck.png"
        main="Stone Colossus, Myth Jinn x2, Myth Trap, Myth Scion, Spirit Trap"
        item="Pet Myth Fuel or Mass Myth Trap"
        side="Empower, Cleanse Charm x2, Spirit Shield x2"
        cantrip="Donate Power 2 (Cameca), Restoring Rain 1 (Hunhau)"
      />
      <PetReqs
        title="Myth 2"
        stats="Torrence's Rage"
        imgSrc="/Storm3/pet-talent.png"
      />
    </div>
  );
};

export default Stats;
