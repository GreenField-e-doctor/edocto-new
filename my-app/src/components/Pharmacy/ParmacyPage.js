import React from 'react';
import Navbar from "../Navbar"; 
import Footer from "../footer/Footer"; 
import './PharmacyPage.css'; 

function PharmacyPage() {

    const products = [
    { id: 1, name: "Product 1", price: "$10.99", imageUrl: "path/to/image1.png", path: "/product/1" },
    { id: 2, name: "Product 2", price: "$15.49", imageUrl: "path/to/image2.png", path: "/product/2" },

];

  return (
    <div className="pharmacy-page">
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Pharmacy Categories</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-person position-relative overflow-hidden">
                  <img src={product.imageUrl} alt={product.name} className="img-fluid" />
                </div>
                <div className="card-body">
                  <a href={product.path} className="title text-dark h5 d-block mb-0">{product.name}</a>
                  <small className="text-muted speciality">{product.price}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PharmacyPage;
