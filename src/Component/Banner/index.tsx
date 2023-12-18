import React from "react";

const index = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 col-12 text-center">
            <div className="banner-detail">
              <p className="text-white  mb-2">
                We can help you realize your dream of a new home
              </p>
              <h1 className="text-white fs-lg fw-bold mb-0">
                The Leading Real Estate
              </h1>
              <h1 className="text-white fs-lg fw-bold mb-4">
                Rental Marketplace.
              </h1>
              <p className="ipsum-detail text-white mt-3 ">
                With over 700,000 active listings, Realtyspace has the largest
                inventory of apartments in the United States.
              </p>
            </div>
          </div>
          {/* <div className="col-lg-5 col-12">
            <div className="banner-form">
              <div className="fome-heading">
                <h4>Find Your Accessible Homes For Rent</h4>
              </div>
              <form>
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="from-control  custome-form"
                        placeholder="What are you looking fou!"
                        name=""
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-select  custome-form"
                        aria-label="Default select example"
                      >
                        <option selected>Property Type</option>
                        <option value="1">Apartment</option>
                        <option value="2">Co-op</option>
                        <option value="3">Single Family Home</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        className="form-select  custome-form"
                        aria-label="Default select example"
                      >
                        <option selected>All Categories</option>
                        <option value="1">Apartment</option>
                        <option value="2">Co-op</option>
                        <option value="3">Single Family Home</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        className="form-select  custome-form"
                        aria-label="Default select example"
                      >
                        <option selected>All Cities</option>
                        <option value="1">Apartment</option>
                        <option value="2">Co-op</option>
                        <option value="3">Single Family Home</option>
                      </select>
                    </div>

                    <div className="custome-btn">
                      <button className="" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default index;
