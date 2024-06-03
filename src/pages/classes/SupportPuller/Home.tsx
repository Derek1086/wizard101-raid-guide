import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import DeckSetup from "../../../components/Setups/DeckSetup";

const SupportPuller = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Support/Puller"
        mainSrc="SupportPuller/main-deck.png"
        itemSrc="SupportPuller/item-deck.png"
        sideSrc="SupportPuller/side-deck.png"
        main="Fairy x2, Sanctuary, Elemental Blade x2"
        item="Storm Blade, Wand Hit"
        side="Fairy x16"
        cantrip="None"
      />
      <Navigation prev="/" next="/supportpuller/drums" />
    </>
  );
};

export default SupportPuller;
