export async function improveText(text, apiKey) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Improve the following resume text.' },
        { role: 'user', content: text }
      ]
    })
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim();
}
