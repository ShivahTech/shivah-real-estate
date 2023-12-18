import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
const indes = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="main-header">
      <div className="top-deader">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-12">
              <div className="head-loaction">
                <ul className="d-flex align-items-center justify-content-center">
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-location-dot"></i>101 W Big
                      Beaver Rd Suite 1400 , Troy MI 48084
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-phone"></i>+1 (888) 538-6433
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-solid fa-envelope"></i>
                      emaple@demo.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <Image
                src={"/image/logo.png"}
                width={150}
                height={150}
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setToggler(!toggler)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${toggler ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    href={"#about"}
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    href={"#services"}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href={"#blog"}>
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href={"#contact"}
                  >
                    Conatct
                  </a>
                </li>
              </ul>
              <div className="custome-qoute">
                <button type="button">Get a Quout</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default indes;
