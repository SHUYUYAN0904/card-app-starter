import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [busy, setBusy] = useState(false); 
  const [error, setError] = useState(""); 
  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      setError("");

      try {
        const data = await getCards();
        setCards(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to load cards.");
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  const handleDelete = async (card) => {
    if (!card || !card.id) return;

    setBusy(true);
    setError("");

    try {
      await deleteCard(card.id);

      setCards((prev) => prev.filter((c) => c.id !== card.id));
    } catch (err) {
      setError("Failed to delete card.");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main><p>Loading cards...</p></main>;

  return (
    <main>
      <h2>Cards</h2>

      {error && <p>{error}</p>}
      {busy && <p>Processing...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={handleDelete} busy={busy} />
        ))}
      </div>
    </main>
  );
}
