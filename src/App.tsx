import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './lib/cart-context';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import QuickOrder from './pages/QuickOrder';
import Services from './pages/Services';
import Rewards from './pages/Rewards';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatsAppOrder from './pages/WhatsAppOrder';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="quick-order" element={<QuickOrder />} />
            <Route path="services" element={<Services />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="whatsapp" element={<WhatsAppOrder />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
