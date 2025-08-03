import { useState } from 'react';
import { improveText } from '../utils/openai';

export default function AITextHelper({ value, onChange }) {
  const [loading, setLoading] = useState(false);

  const handleImprove = async () => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
      alert('Missing OpenAI API key');
      return;
    }
    setLoading(true);
    try {
      const improved = await improveText(value, apiKey);
      if (improved) onChange(improved);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea value={value} onChange={e => onChange(e.target.value)} />
      <button type="button" onClick={handleImprove} disabled={loading}>
        {loading ? '...' : 'Improve'}
      </button>
    </div>
  );
}
