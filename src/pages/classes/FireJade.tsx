import Header from "../../components/Header";

import DeckSetup from "../../components/DeckSetup";

const FireJade = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Fire Jade"
        mainSrc="FireJade/main-deck.png"
        itemSrc="FireJade/item-deck.png"
        sideSrc="FireJade/side-deck.png"
        main="Bottom Path Fire Elf x2, Betrayal, Curse/Hex
"
        item="Pet Fuel, IC Bladestorm, Wyldfire Ruby (+35%)
"
        side="Bottom Path Immolate x2, Shatter (3 Shields) x2, Donate Power x2, Spirit Blade"
      />
    </>
  );
};

export default FireJade;
