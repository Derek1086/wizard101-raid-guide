import Header from "../../../components/Header";
import Title from "../../../components/Text/Title";
import Navigation from "../../../components/Navigation";
import DeckSetup from "../../../components/Setups/DeckSetup";

const Myth1 = () => {
  return (
    <>
      <Header />
      <DeckSetup
        title="Myth 1"
        mainSrc="Myth1/main-deck.png"
        itemSrc="Myth1/item-deck.png"
        sideSrc="Myth1/side-deck.png"
        main="Cleanse Charm, Turmoil Oni, Storm Trap, Elemental Blade"
        item="Star Blade, Threefold Fever x2"
        side="None"
        cantrip="Dual Strike 3 (Hunhau)"
      />
      <Navigation prev="/" next="/storm1/drums" />
      <a
        href="https://www.twitch.tv/videos/2155969405"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Title text="Myth 1 POV" />
      </a>
    </>
  );
};

export default Myth1;
