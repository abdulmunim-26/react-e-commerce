import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Collections from './components/collection';
import SpecialProducts from './components/special_products';
import Blog from './components/blog';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Collections/>
      <SpecialProducts/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
