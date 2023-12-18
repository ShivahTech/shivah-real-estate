import React from "react";
import Image from "next/image";
import { work } from "@/Utility/howwork";
import { map } from "lodash";
const index = () => {
  return (
    <section className="how-work-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="heading-deatail">
              <h3>How It Works?</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores
              </p>
            </div>
          </div>

          <div className="row align-items-center pt-2 pt-md-3 pt-lg-4">
            {map(work, (items, index) => (
              <>
                <div className="col-lg-3 col-sm-6 col-md-4" key={index}>
                  <div className="work-section">
                    <div className="count">
                      <p>{items.countp}</p>{" "}
                    </div>
                    <div className="inner-section">
                      <Image
                        src={items.src}
                        width={40}
                        height={40}
                        alt="how it work"
                      />
                      <h4>{items.heading}</h4>
                      <p>{items.details}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 px-0 d-none d-lg-block">
                  <div className="arrow-section">
                    <Image
                      src={"/image/arrow-right-2.png"}
                      width={50}
                      height={100}
                      alt="arrow"
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
