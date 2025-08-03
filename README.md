# CV Generator with AI

Static CV generator built with React and Vite. It allows editing resume data in an admin panel, previewing the generated page and exporting a final static CV. Optional integration with OpenAI provides text suggestions during editing.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173/admin` to edit your data. Preview on `/preview` and the generated CV on `/cv`.

Create a `.env` file with your OpenAI key:

```
VITE_OPENAI_API_KEY=your-api-key-here
```

Build the static site with:

```bash
npm run build
```

The output is in `dist/` and can be deployed to any static hosting provider.
