import './styles.css';
import image1 from '/home/developer/Desktop/react/react-e-commerce/src/images/shopping-bag-icon.png';

const Navbar = () => {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className="container">
            <a className="navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="index.html">
                <img src={image1} alt="site icon" />
                <span className="text-uppercase fw-lighter ms-2">Attire</span>
            </a> 
            <div className="order-lg-2 nav-btns">
                <button type="button" className="btn position-relative">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="position-absolute top= 0 start-100 translate-middle badge bg-primary">5</span>
                </button>
                <button type="button" className="btn position-relative">
                    <i className="fa fa-heart"></i>
                    <span className="position-absolute top= 0 start-100 translate-middle badge bg-primary">2</span>
                </button>
                <button type="button" className="btn position-relative">
                    <i className="fa fa-search"></i>
                    <span className="position-absolute top= 0 start-100 translate-middle badge bg-primary"></span>
                </button>
            </div>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse order-lg-1" id="navMenu">
                <ul className="navbar-nav mx-auto text-center">
                    <li className="nav-item px-2 py-2">
                        <a className="nav-link text-uppercase text-dark" href="#header">home</a>
                    </li>
                    <li className="nav-item px-2 py-2">
                        <a className="nav-link text-uppercase text-dark" href="#collection">collections</a>
                    </li>
                    <li className="nav-item px-2 py-2">
                        <a className="nav-link text-uppercase text-dark" href="#special">specials</a>
                    </li>
                    <li className="nav-item px-2 py-2">
                        <a className="nav-link text-uppercase text-dark" href="#about">about us</a>
                    </li>
                    <li className="nav-item px-2 py-2 border-0">
                        <a className="nav-link text-uppercase text-dark" href="#popular">popular</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      </div>
    );
  };

  export default Navbar;