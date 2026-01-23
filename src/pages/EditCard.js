import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    card_name: "",
    card_pic: "",
  });

  useEffect(() => {
    async function loadCard() {
      setLoading(true);
      setError("");

      try {
        const data = await getCards();
        const found = Array.isArray(data)
          ? data.find((c) => String(c.id) === String(id))
          : null;

        if (!found) {
          setError("Card not found.");
        } else {
          setValues({
            card_name: found.card_name || "",
            card_pic: found.card_pic || "",
          });
        }
      } catch (err) {
        setError("Failed to load card for editing.");
      } finally {
        setLoading(false);
      }
    }

    loadCard();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (cardData) => {
    setBusy(true);
    setError("");

    try {
      await updateCard(id, cardData);
      alert("Card updated successfully");
      navigate("/cards");
    } catch (err) {
      setError("Failed to update card.");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main><p>Loading card...</p></main>;

  return (
    <main>
      <h2>Edit Card</h2>

      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Update"
      />
    </main>
  );
}
