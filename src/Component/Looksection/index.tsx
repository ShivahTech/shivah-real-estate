import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { look } from "@/Utility/look";
import { map } from "lodash";
export const index = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="looksection">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="heading-deatail">
              <h3>Looking to Buy a new property or Sell an existing one?</h3>
              <p>Lorem dolor sit amet, disse suscipit sagittis leo sitea.</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center  pt-2 pt-md-3 pt-lg-4">
          <div className="col-lg-12">
            <Slider {...settings}>
              {/* <div>
                <div className="d-grid look-details-services">
                  <Image
                    src="/image/building.png"
                    width={50}
                    height={50}
                    alt="Looking to Buy a new property "
                  />
                  <Link className="apa-links" href="#">
                    House
                  </Link>
                </div>
              </div>
              <div>
                <div className="d-grid look-details-services">
                  <Image
                    src="/image/Office.png"
                    width={50}
                    height={50}
                    alt="Looking to Buy a new property "
                  />
                  <Link className="apa-links" href="#">
                    Office
                  </Link>
                </div>
              </div>
              <div>
                <div className="d-grid look-details-services">
                  <Image
                    src="/image/villa.png"
                    width={50}
                    height={50}
                    alt="Looking to Buy a new property "
                  />
                  <Link className="apa-links" href="#">
                    Villa
                  </Link>
                </div>
              </div>
              <div>
                <div className="d-grid look-details-services">
                  <Image
                    src="/image/luxury.png"
                    width={50}
                    height={50}
                    alt="Looking to Buy a new property "
                  />
                  <Link className="apa-links" href="#">
                    Luxury homes
                  </Link>
                </div>
              </div> */}

              {map(look, (item, index) => (
                <div key={index}>
                  <div className="d-grid look-details-services">
                    <Image
                      src={item.src}
                      width={50}
                      height={50}
                      alt="Looking to Buy a new property "
                    />
                    <Link className="apa-links" href="#">
                      {item.heading}
                    </Link>
                    <div className="apartment-last-section">
                      <Link href="">
                        <span className="no-apar">{item.no}</span>
                        <span>{item.linkname}</span>
                        <span>
                          {" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default index;
