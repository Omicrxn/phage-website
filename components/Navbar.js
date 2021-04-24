import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light d-lg-flex d-none mt-1">
        <div className="container ">
          <ul class="navbar-nav w-50 justify-content-start">
            <li class="nav-item ">
              <div
                className={
                  router.pathname == "/portfolio"
                    ? " nav-link nav-text text-center active "
                    : "nav-link nav-text text-center "
                }
              >
                <Link href="/portfolio" aria-current="page">
                  Portfolio
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <div
                className={
                  router.pathname == "/services"
                    ? " nav-link nav-text text-center active "
                    : "nav-link nav-text text-center"
                }
              >
                <Link href="/services" aria-current="page">
                  Services
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <div
                className={
                  router.pathname == "/services"
                    ? " nav-link nav-text text-center active "
                    : "nav-link nav-text text-center"
                }
              >
                <Link href="/contact" aria-current="page">
                  Contact
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <div
                className={
                  router.pathname == "/services"
                    ? " nav-link nav-text text-center active "
                    : "nav-link nav-text text-center"
                }
              >
                <Link href="/about" aria-current="page">
                  About
                </Link>
              </div>
            </li>
          </ul>

            <Link className="navbar-brand mx-auto " href="/" aria-current="page">
              <Image layout="intrinsic" className="nav-brand" src="/images/Lettering.png" width={181.616} height={30} />
            </Link>

          <ul class="navbar-nav w-50 justify-content-end">
            <li class="nav-item p-0">
            <a target="blank" className="nav-link nav-text" href="https://twitter.com/PhageDev"><Image className="social-links" src={'/images/Twitter.png'} width={32} height={32}/></a>
            </li>
            <li class="nav-item p-0">
            <a target="blank" className="nav-link nav-text" href="https://www.instagram.com/phage.dev/"><Image className="social-links" src={'/images/Instagram.png'}width={32} height={32}/></a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light d-lg-none mt-3 ">
        <div className="container d-flex">
        <Link className="navbar-brand mx-auto " href="/" aria-current="page">
              <Image layout="intrinsic" className="nav-brand" src="/images/Lettering.png" width={136} height={25} />
            </Link>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div
                  className={
                    router.pathname == "/portfolio"
                      ? " nav-link active "
                      : "nav-link"
                  }
                >
                  <Link href="/portfolio" aria-current="page">
                    Portfolio
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <div
                  className={
                    router.pathname == "/services"
                      ? " nav-link active "
                      : "nav-link"
                  }
                >
                  <Link href="/services" aria-current="page">
                    Services
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <div
                  className={
                    router.pathname == "/services"
                      ? " nav-link active "
                      : "nav-link"
                  }
                >
                  <Link href="/contact" aria-current="page">
                    Contact
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <div
                  className={
                    router.pathname == "/services"
                      ? " nav-link active "
                      : "nav-link"
                  }
                >
                  <Link href="/about" aria-current="page">
                    About
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
