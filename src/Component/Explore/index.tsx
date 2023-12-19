import React from "react";
import Image from "next/image";
import Link from "next/link";
import { map } from "lodash";
import { place } from "@/Utility/explor";
export const index = () => {
  return (
    <section className="export-section" id="services">
      <div className="container">
        <div className="row align-items-stretch justify-content-center">
          <div className="col-lg-6 col-12 d-flex">
            <div className="heading-deatail flex-fill">
              <h3>Explore Good Places</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch pt-2 pt-md-3 pt-lg-4">
          {map(place, (item, index) => (
            <div className="col-lg-4 col-xl-3 col-md-6 d-flex" key={index}>
              <div className="main-export-section flex-fill">
                <div className="silder">
                  <Image
                    src={item.src}
                    width={500}
                    height={500}
                    alt="exportimage"
                  />
                </div>
                <div className="inner-section">
                  <div className="second-section">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span>{item.sale}</span>
                        <h4>
                          <Link href="">{item.heading}</Link>
                        </h4>
                      </div>
                      <div>
                        <h6 className="listing-card-info-price">
                          {item.price}{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="listing-section">
                    <div className="d-flex  align-items-center pe-1">
                      <div className="lisiting-icon">
                        <i className="fa-solid fa-bed"></i>{" "}
                      </div>
                      <div>
                        <p> {item.bathroom}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center pe-1">
                      <div className="lisiting-icon">
                        <i className="fa-solid fa-bed"></i>{" "}
                      </div>
                      <div>
                        <p> {item.bathroom}</p>
                      </div>
                    </div>
                    <div className="d-flex  align-items-center pe-1">
                      <div className="lisiting-icon">
                        <i className="fa-solid fa-bed"></i>{" "}
                      </div>
                      <div>
                        <p>{item.sqft}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="listing-footer-section">
                  <div>
                    <Link href="" className="location-a">
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {item.location}
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className="view-btn">
                      {item.btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default index;
