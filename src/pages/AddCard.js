import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddCard = async (cardData) => {
    setLoading(true);
    setError("");

    try {
      await addCard(cardData);
      alert("Card added successfully");
      navigate("/");
    } catch (err) {
      setError("Failed to add card, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main 
    // style={styles.container}
    >
      <h2 
      // style={styles.title}
      >Add New Card</h2>

      {error && <p 
      // style={styles.error}
      >{error}</p>}

      <CardForm onSubmit={handleAddCard} disabled={loading} />

      {loading && <p 
      // style={styles.loading}
      >Adding card...</p>}
    </main>
  );
}


  /* TODO: Complete the AddCard page
    - display a form for adding a new card (use the CardForm component to display the form)
    - handle form submission to call addCard API
    - handle busy and error states
    - style as a form UI */
