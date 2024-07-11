
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar';
import ContactUs from './component/contactus';
import Category from './component/category';
import AboutUs from './component/AboutUs';
import HomePage from './component/HomePage';
import Footer from './component/footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <Navbar />


      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/About'} element={<AboutUs />} />
        <Route path={'/Contact'} element={<ContactUs />} />
        <Route path={'/Category'} element={<Category />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
