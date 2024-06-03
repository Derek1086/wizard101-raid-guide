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
        main="Myth Jinn x2, Myth Trap, Myth Blade, Myth Scion, Spirit Trap, Elemental Trap"
        item="None"
        side="Myth Blade, Shatter (3 Shields), Empower, Cleanse Charm, Spirit Shield x4"
        cantrip="Dual Strike 3 (Hunhau)"
      />
      <Navigation prev="/" next="/myth1/northtokenfight" />
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
