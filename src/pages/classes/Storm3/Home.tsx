import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import PetReqs from "../../../components/PetRequirements";
import DeckSetup from "../../../components/DeckSetup";
import RecStats from "../../../components/RecStats";

const Storm3 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Storm 3"
        mainSrc="Storm3/main-deck.png"
        itemSrc="Storm3/item-deck.png"
        sideSrc="Storm3/side-deck.png"
        main="Cleanse Charm,  Storm Scion, Energy Transfer, Storm Owl, Elemental Blade"
        item="Storm Trap, Storm Blade"
        side="Lightning Bats x2, Curse x2"
        cantrip="Donate Power 3 (Ixta), Restoring Rain 1 (Hunhau)"
      />
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
      <RecStats
        title="Storm 3"
        stats="207% Storm Damage, 59% Storm Pierce, 35% Storm Accuracy, 100% Pip Chance"
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
