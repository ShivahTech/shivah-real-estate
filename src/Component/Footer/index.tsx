import Link from "next/link";
import React from "react";
import Image from "next/image";
const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="row alihn-items-center justify-content-between">
          <div className="col-lg-3 col-sm-6">
            <div className="footer-logo">
              <Link href="/" className="">
                <Image
                  src="/image/footer-logo.png"
                  width={200}
                  height={200}
                  alt="footer-logo"
                />
              </Link>
              <p>
                Feugiat a ligula rutrum luctus primis ultrice nteger congue
                magna at pretium purus a pretium ligula rutrum and luctus
              </p>
              <div className="social-link">
                <h4>Social Info</h4>
                <ul>
                  <li>
                    <Link href="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-link">
              <h3>Our Navigation</h3>
              <ul>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Reliability
                    &amp; Punctuality
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Trusted
                    Franchise
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Warehoues
                    Storage
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Real Time
                    Tracking
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Transparent
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-link">
              <h3>Our Service</h3>
              <ul>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Reliability
                    &amp; Punctuality
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Trusted
                    Franchise
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Warehoues
                    Storage
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Real Time
                    Tracking
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <i className="fa-solid fa-angles-right"></i> Transparent
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-link">
              <h3>Newsletter</h3>
              <p className="pt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <div className="newsletter-input">
                <input
                  type=""
                  placeholder="Email"
                  className="form-control"
                  required
                />
                <div className="newsletter-btn">
                  <button type="submit">
                    <i className="fa-solid fa-angles-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container boder-top mt-2">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12 col-12 text-center">
            <p className="text-white mb-0 py-2 ">
              Copyright © Shivah All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
