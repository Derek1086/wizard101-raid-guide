import Header from "../../../components/Header";
import Body from "../../../components/Text/Body";
import Navigation from "../../../components/Navigation";
import DeckSetup from "../../../components/Setups/DeckSetup";

const StormJade = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Storm Jade GOATLING"
        mainSrc="StormJade/goat-main-deck.png"
        itemSrc="StormJade/goat-item-deck.png"
        sideSrc="StormJade/goat-side-deck.png"
        main="Curse/Hex, Threefold Fever, Elemental Blade"
        item="Darkwind Amethyst (+35%), Donate Power, Storm Blade"
        side="Shatter (3 Shields) x3, Cleanse Charm x2"
        cantrip="None"
      />
      <br />
      <Body text="*If Balance, use TC Threefold Fever*" />
      <Body text="*If Death, use TC Donate Power*" />
      <Navigation prev="/" next="/stormjade/drums" />
    </>
  );
};

export default StormJade;
