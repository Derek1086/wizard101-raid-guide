import DeckSetup from "../../../components/Setups/DeckSetup";

const Stats = () => {
  return (
    <div>
      <DeckSetup
        title=""
        mainSrc="Storm4/main-deck.png"
        itemSrc="Storm4/item-deck.png"
        sideSrc="Storm4/side-deck.png"
        main="Cleanse Charm, Storm Scion, Storm Owl, Elemental Blade"
        item="Storm Trap, Storm Blade"
        side="Pierce x2, Lightning Bolt x2, Hex x2"
        cantrip="Donate Power 2 (Autloc), Donate Power 3 (Autloc)"
      />
    </div>
  );
};

export default Stats;
