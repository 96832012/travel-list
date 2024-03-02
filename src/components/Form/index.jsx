import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description1 && !description2 && !description3) return;

    const newItem = {
      description1,
      description2,
      description3,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription1("");
    setDescription2("");
    setDescription3("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Name"
        value={description1}
        onChange={(e) => setDescription1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={description2}
        onChange={(e) => setDescription2(e.target.value)}
      />
      <input
        type="email"
        placeholder="Item..."
        value={description3}
        onChange={(e) => setDescription3(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
