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
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </p>
            </div>
          </div>
        </div>
        <div className="row laign-items-center pt-2 pt-md-3 pt-lg-4">
          <div className="col-lg-3 col-md-6 mt-4 mt-md-0 mt-lg-4">
            <div className="apartment-top-section">
              <div className="apartment-main-section">
                <figure>
                  <Image
                    src="/image/single-property-26-728x510.jpg"
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
          <div className="col-lg-3 col-md-6  ">
            <div className="apartment-top-section">
              <div className="apartment-main-section">
                <figure>
                  <Image
                    src="/image/single-property-29-728x510.jpg"
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
          <div className="col-lg-3 col-md-6 mt-1 mt-md-0 mt-lg-4 ">
            <div className="apartment-top-section">
              <div className="apartment-main-section">
                <figure>
                  <Image
                    src="/image/single-property-43-728x510.jpg"
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
          <div className="col-lg-3 col-md-6">
            <div className="apartment-top-section">
              <div className="apartment-main-section">
                <figure>
                  <Image
                    src="/image/single-property-42-728x510.jpg"
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
      </div>
    </section>
  );
};
export default index;
