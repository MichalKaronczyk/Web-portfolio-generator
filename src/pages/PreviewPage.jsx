import profile from '../data/profile.json';

export default function PreviewPage() {
  return (
    <div>
      <h1>Preview</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
