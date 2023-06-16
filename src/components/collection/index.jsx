import './styles.css';
import image2 from '/home/developer/Desktop/react/react-e-commerce/src/images/c_formal_gray_shirt.png';

const Collections = () => {
    
    return (
      <div>
        <section id="collection" className="py-5">
        <div className="container">
            <div className="title text-center">
                <h2 className="position-relative d-inline-block">New collection</h2>
            </div>
            <div className="row g-0 filter-button-group">
                <div className="d-flex flex-wrap justify-content-center mt-5">
                    <button type="button" className="btn m-2 text-dark active-filter-btn" data-filter="*">All</button>
                    <button type="button" className="btn m-2 text-dark" data-filter=".best">Best Sellers</button>
                    <button type="button" className="btn m-2 text-dark" data-filter=".feat">Featured</button>
                    <button type="button" className="btn m-2 text-dark" data-filter=".new">New Arrivals</button>
                </div>
            </div>
            <div className="collection-list mt-4 row gx-0 gy-3">
                <div className="col-md-6 col-lg-4 col-xl-3 p-2">
                    <div className="collection-img">
                        <img src={image2} className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                    <div className="collection-img">
                        <img src="images/c_polo-shirt.png" className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                    <div className="collection-img">
                        <img src="images/c_pant_girl.png" className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                    <div className="collection-img">
                        <img src="images/c_shirt-girl.png" className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                    <div className="collection-img">
                        <img src="images/c_t-shirt_men.png" className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                    <div className="collection-img">
                        <img src="images/c_undershirt.png" className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                    <div className="collection-img">
                        <img src="images/c_western-shirt.png" className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                    <div className="collection-img">
                        <img src="images/c_tunic-shirt_girl.png" className="w-100" />
                        <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                    </div>
                    <div className="text-center">
                        <div className="rating mt-3">
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                            <span className="text-primary"><i className="fas fa-star"></i></span>
                        </div>
                        <p className="text-cappitalize my-1">gray shirt</p>
                        <span className="fw-bold">$ 45.50</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  };

  export default Collections;