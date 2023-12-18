import React from "react";
import Image from "next/image";
const index = () => {
  return (
    <section className="banner-sections">
      <div className="ineer-section">
        <Image
          src="/image/slider-1.jpg"
          width={500}
          height={500}
          alt="banner-image"
        />
      </div>
      <section className="banner-details">
        <div className="container">
          <div className="row  justify-content-center">
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
          </div>
        </div>
      </section>
    </section>
    // <section className="banner-section">
    //   <div className="container">
    //     <div className="row align-items-center justify-content-center">
    //       <div className="col-lg-8 col-12 text-center">
    //         <div className="banner-detail">
    //           <p className="text-white  mb-2">
    //             We can help you realize your dream of a new home
    //           </p>
    //           <h1 className="text-white fs-lg fw-bold mb-0">
    //             The Leading Real Estate
    //           </h1>
    //           <h1 className="text-white fs-lg fw-bold mb-4">
    //             Rental Marketplace.
    //           </h1>
    //           <p className="ipsum-detail text-white mt-3 ">
    //             With over 700,000 active listings, Realtyspace has the largest
    //             inventory of apartments in the United States.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default index;
