import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Navlink from "./Navlink";

function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const router = useRouter();
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="navigation">
        <div className="container"></div>
        {/* ================menu nav============= */}
        <div className={`${sticky ? "is-sticky" : ""} menu-nav `}>
          <div className="container">
            <div className="menu-nav-inner">
              <div className="menu-nav-inner-left">
                {router.pathname == "/blog/[slug]" ? (
                  <div className="logo">
                    <Link href={"/"}>
                      <span>
                        <Image
                          src="/assets/img/logo/logo.svg"
                          width={192}
                          height={40}
                          alt="logo"
                        />
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div className="logo">
                    <Link href={"/"}>
                      <span>
                        <Image
                          src="/assets/img/logo/logo.svg"
                          width={192}
                          height={40}
                          alt="logo"
                        />
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={`${
                  sidebarActive ? "active" : ""
                } menu-nav-inner-right`}
              >
                <div className="menu-nav-inner-right-inner">
                  <div className="close-nav" onClick={_toggleSidebar}>
                    <Image
                      src="/assets/img/close.png"
                      alt="Image Not Found"
                      height={15}
                      width={15}
                      className="close-icon"
                    />
                  </div>
                  <ul className="nav-menu">
                    <Navlink
                      href="/"
                      text="Home"
                      _toggleSidebar={_toggleSidebar}
                    />
                    <Navlink
                      href="/about"
                      text="About"
                      _toggleSidebar={_toggleSidebar}
                    />
                    <Navlink
                      href="/#service"
                      text="Service"
                      _toggleSidebar={_toggleSidebar}
                    />
                    {/* <li className="nav-list" onClick={_toggleDropdown}>
                      <div className="nav-link">
                        Services     
                      </div>

                    </li> */}

                    <Navlink
                      href="/blog"
                      text="Blog"
                      _toggleSidebar={_toggleSidebar}
                    />

                    <Navlink
                      href="/contact"
                      text="Contact Us"
                      _toggleSidebar={_toggleSidebar}
                    />

                    <li
                      className="nav-list  let-talk-btn"
                      onClick={_toggleSidebar}
                    >
                      <Link href={"/login"}>
                        <button className="nav-link login-btn pop-hover">
                          Login
                        </button>
                      </Link>
                      <Link href={"/register"}>
                        <button className="nav-link login-btn pop-hover">
                          Sign up
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="open-mobile-menu" onClick={_toggleSidebar}>
                <span>
                  <AiOutlineMenu />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ================menu nav end============= */}
      </nav>
    </>
  );
}
export default Header;
