import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";

import DeckSetup from "../../../components/Setups/DeckSetup";

const Storm2 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Storm 2 GOATLING"
        mainSrc="Storm2/goat-main-deck.png"
        itemSrc="Storm2/goat-item-deck.png"
        sideSrc="Storm2/goat-side-deck.png"
        main="Turmoil Oni, Storm Blade x2, Elemental Blade, Elemental Trap"
        item="Threefold Fever x2"
        side="Cleanse Charm x2, Lightning Bats x2, Storm Trap x2"
        cantrip="Dual Strike 1 (Autloc), Dual Strike 2 (Hunhau)"
      />
      <Navigation prev="/" next="/storm2/drums" />
    </>
  );
};

export default Storm2;
