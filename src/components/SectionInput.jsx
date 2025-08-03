import AITextHelper from './AITextHelper';

export default function SectionInput({ label, items, setItems }) {
  const addItem = () => setItems([...items, '']);

  const updateItem = (val, idx) => {
    const arr = [...items];
    arr[idx] = val;
    setItems(arr);
  };

  return (
    <div>
      <h3>{label}</h3>
      {items.map((item, idx) => (
        <AITextHelper key={idx} value={item} onChange={val => updateItem(val, idx)} />
      ))}
      <button type="button" onClick={addItem}>+</button>
    </div>
  );
}
