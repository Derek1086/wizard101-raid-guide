import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";

import DeckSetup from "../../../components/Setups/DeckSetup";
import RecStats from "../../../components/Setups/RecStats";

const Storm2 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Storm 2"
        mainSrc="Storm2/main-deck.png"
        itemSrc="Storm2/item-deck.png"
        sideSrc="Storm2/side-deck.png"
        main="Cleanse Charm, Energy Transfer, Storm Scion, Storm Trap, Storm Blade, Elemental Blade, Elemental Trap"
        item="None"
        side="Top Path Kraken, Lightning Bats x2, Storm Trap x2, Storm Blade"
        cantrip="Dual Strike 1 (Autloc), Dual Strike 2 (Hunhau)"
      />
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
      <RecStats
        title="Storm 2"
        stats="207% Storm Damage, 59% Storm Pierce, 35% Storm Accuracy, 100% Pip Chance"
      />
      <Navigation prev="/" next="/storm2/drums" />
    </>
  );
};

export default Storm2;
