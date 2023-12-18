import React from "react";
import Image from "next/image";
export const index = () => {
  return (
    <section className="apartment-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-12 text-center">
            <div className="heading-deatail">
              <h3>Explore Apartment Types</h3>
            </div>
          </div>
        </div>
        <div className="row laign-items-center pt-2 pt-md-3 pt-lg-4">
          <div className="col-lg-3">
            <div className="apartment-main-section">
              <figure>
                <Image
                  src="/image/c-1.png"
                  width="200"
                  height="200"
                  alt="apartment picture"
                />
              </figure>
              <div className="inner-section">
                <h3>Paris</h3>
                <p>04 Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default index;
