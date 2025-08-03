import { Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import PreviewPage from './pages/PreviewPage';
import CVPage from './pages/CVPage';

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="*" element={<AdminPanel />} />
    </Routes>
  );
}
