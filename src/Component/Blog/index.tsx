import React from "react";
import Image from "next/image";
import { map } from "lodash";
import { blog } from "@/Utility/blog";
const index = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="heading-deatail">
              <h3>News By Resido</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            {map(blog, (item, index) => (
              <div
                className="col-lg-4  col-md-6 mt-2 mt-md-2 mt-lg-0"
                key={index}
              >
                <div className="main-blog-section">
                  <figure>
                    <Image
                      src={item.src}
                      width={500}
                      height={500}
                      alt="blog-section"
                    />
                  </figure>
                  <div className="inner-section">
                    <p className="time-section">
                      <i className="fa-solid fa-calendar-days me-1"></i>{" "}
                      {item.time}
                    </p>
                    <h4> {item.heading} </h4>
                    <p>{item.detail}</p>
                    <button className="" type="button">
                      Continue <i className=" ms-2 fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
