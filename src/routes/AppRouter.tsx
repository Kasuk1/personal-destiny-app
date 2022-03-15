import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from 'components/molecules';
import { Home, HotelsByLocation, Hotels } from 'views';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:location" element={<HotelsByLocation />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
