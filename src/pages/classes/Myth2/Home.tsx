import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import DeckSetup from "../../../components/Setups/DeckSetup";

const Myth2 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Myth 2"
        mainSrc="Myth2/main-deck.png"
        itemSrc="Myth2/item-deck.png"
        sideSrc="Myth2/side-deck.png"
        main="Stone Colossus, Myth Jinn x2, Myth Trap, Myth Scion, Spirit Trap"
        item="Pet Myth Fuel or Mass Myth Trap"
        side="Empower, Cleanse Charm x2, Spirit Shield x2"
        cantrip="Donate Power 2 (Cameca), Restoring Rain 1 (Hunhau)"
      />
      <Navigation prev="/" next="/myth2/northtokenfight" />
    </>
  );
};

export default Myth2;
