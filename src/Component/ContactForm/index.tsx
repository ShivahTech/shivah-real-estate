import React from "react";

export const index = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className=" col-lg-6 col-md-6">
            <div className="form-silder">
              <h2>Interesting Articles Updated Daily</h2>
              <ul>
                <li>
                  <p>
                    <i className="fa-solid fa-arrow-right me-1"></i> Modern
                    apartment adjacent
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <i className="fa-solid fa-arrow-right me-1"></i> We are
                    Offering the Best RED
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <i className="fa-solid fa-arrow-right me-1"></i> Architects
                    design a Resort
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <i className="fa-solid fa-arrow-right me-1"></i> Project
                    Luxury Villa in Rego Park
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <i className="fa-solid fa-arrow-right me-1"></i> Your ideas
                    are very important to us
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <div className="contant-form-section">
              <h4>Let Us Call You</h4>
              <p>To help you find your property</p>
              <div className="form-section">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className=" col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Enter your phone"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className=" col-12">
                    <div className="form-group">
                      <textarea
                        name="messenger"
                        className="form-control "
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="How is your desired property?"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="form-btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default index;
