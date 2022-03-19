import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from 'components/molecules';
import { Home, LocationsGroup, Hotels } from 'views';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Hotels />} />
        <Route path="/locations/:searchTerm" element={<LocationsGroup />} />
        <Route path="/hotels/:destinationId" element={<Hotels />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
