import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 12,
      }}
    >
      <h3 style={{ marginTop: 0 }}>{card.card_name}</h3>

      {card.card_pic && (
        <img
          src={card.card_pic}
          alt={card.card_name}
          style={{ width: "100%", borderRadius: 8, marginBottom: 10 }}
        />
      )}

      <div style={{ display: "flex", gap: 10 }}>
        <Link to={`/cards/${card.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={() => onDelete(card)}
          disabled={busy}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
