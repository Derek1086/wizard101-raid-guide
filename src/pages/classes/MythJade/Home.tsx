import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import DeckSetup from "../../../components/Setups/DeckSetup";

const MythJade = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Myth Jade"
        mainSrc="MythJade/main-deck.png"
        itemSrc="MythJade/item-deck.png"
        sideSrc="MythJade/side-deck.png"
        main="Betrayal, Spirit Blade, Spirit Trap,Curse/Hex"
        item="Pet Myth Fuel, Jewel Cleanse Charm, Time of Legend Periodt (+35%)"
        side="Stone Colossus x2, TC Shatter (3 Shields) x2, Donate Power x2, Spirit Blade Shield"
        cantrip="Restoring Rain 3 (Hunhau)"
      />
      <Navigation prev="/" next="/mythjade/northtokenfight" />
    </>
  );
};

export default MythJade;
