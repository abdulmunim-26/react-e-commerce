import './styles.css';
import image1 from '/home/developer/Desktop/react/react-e-commerce/src/images/special_product_1.jpg';


const SpecialProducts = () => {
    
    return (
      <div>
        <section id="special" className="py-5">
        <div className="container">
            <div className="title text-center py-5">
                <h2 className="position-relative d-inline-block">special selection</h2>
            </div>
            <div className="special-list row g-0">
                <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className="special-img position-relative overflow-hidden">
                        <img src={image1} className="w-100" /> 
                        <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                    <div className="text-center">
                        <p className="text-cappitalize mt-3 mb-1">gray shirt</p>
                        <span className="fw-bold d-block">$ 45.50</span>
                        <a href="#" className="btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className="special-img position-relative overflow-hidden">
                        <img src="images/special_product_2.jpg" className="w-100" /> 
                        <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                    <div className="text-center">
                        <p className="text-cappitalize mt-3 mb-1">gray shirt</p>
                        <span className="fw-bold d-block">$ 45.50</span>
                        <a href="#" className="btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className="special-img position-relative overflow-hidden">
                        <img src="images/special_product_3.jpg" className="w-100" /> 
                        <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                    <div className="text-center">
                        <p className="text-cappitalize mt-3 mb-1">gray shirt</p>
                        <span className="fw-bold d-block">$ 45.50</span>
                        <a href="#" className="btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className="special-img position-relative overflow-hidden">
                        <img src="images/special_product_4.jpg" className="w-100" /> 
                        <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                    <div className="text-center">
                        <p className="text-cappitalize mt-3 mb-1">gray shirt</p>
                        <span className="fw-bold d-block">$ 45.50</span>
                        <a href="#" className="btn btn-primary mt-3">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  };

  export default SpecialProducts;