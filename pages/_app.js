import { useEffect } from "react";
import { Navbar } from "../components";
import Layout from "../layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const navbar = document.querySelector("nav");
    const menuToggle = document.querySelector("button.menu-toggle");
    const navUl = document.querySelector("nav ul");

    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }

      console.log(navbar);
      console.log(window.pageYOffset);
    };

    menuToggle.addEventListener("click", function () {
      this.classList.toggle("hamburger-active");
      navUl.classList.toggle("slide");
    });
  }, []);

  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
