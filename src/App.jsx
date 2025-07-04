import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<div className="text-center mt-20">Halaman tidak ditemukan</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
