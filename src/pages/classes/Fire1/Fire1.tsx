import Header from "../../../components/Header";

import DeckSetup from "../../../components/DeckSetup";

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
        cantrip="Donate Power 1, Dual Strike 1"
      />
    </>
  );
};

export default Fire1;
