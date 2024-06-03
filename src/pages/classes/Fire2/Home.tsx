import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";

import DeckSetup from "../../../components/Setups/DeckSetup";
import RecStats from "../../../components/Setups/RecStats";
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
      <RecStats
        title="Fire 2"
        stats="195% Fire Damage, 68% Fire Pierce, 30% Fire Accuracy, 100% Pip Chance"
      />
      <PetReqs
        title="Fire 2"
        stats="Bernie's Omen"
        imgSrc="/Fire2/pet-talent.png"
      />
      <Navigation prev="/" next="/fire2/drums" />
    </>
  );
};

export default Fire2;
