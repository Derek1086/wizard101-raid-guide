import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";

import DeckSetup from "../../../components/DeckSetup";
import RecStats from "../../../components/RecStats";

const Fire1 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Fire 1"
        mainSrc="Fire1/main-deck.png"
        itemSrc="Fire1/item-deck.png"
        sideSrc="Fire1/side-deck.png"
        main="Fire Trap, Bernie Notice, Caldera Jinn, Helephant, Spirit Trap"
        item="Amulet Blade (+40%), Deck Sun Trap"
        side="Top Path Immolate x2, Empower, Cleanse Charm, Donate Power x2, Spirit Shield x3, Spirit Trap"
        cantrip="Donate Power 1, Donate Power 2, Dual Strike 1"
      />
      <RecStats
        title="Fire 1"
        stats="195% Damage, 68% Pierce, 30% Accuracy, 100% Pip Chance, "
      />
      <Navigation prev="/" next="/fire1/drums" />
    </>
  );
};

export default Fire1;
