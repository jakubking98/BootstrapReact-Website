import { useEffect, useRef } from "react";
import decoration from "../images/vertical-decoration-left.svg";

export const Header = () => {
  const replaceMeRef = useRef(null); // Referencja do elementu z tekstem, który będzie animowany

  useEffect(() => {
    // Sprawdzenie, czy ReplaceMe jest dostępne globalnie
    if (window.ReplaceMe && replaceMeRef.current) {
      const replace = new window.ReplaceMe(replaceMeRef.current, {
        animation: "animated fadeIn",
        speed: 2000,
        separator: ",",
        loopCount: "infinite",
        autoRun: true,
      });

      return () => {
        // Opcjonalnie można wyczyścić instancję przy odmontowaniu komponentu
        if (replace && typeof replace.stop === "function") {
          replace.stop();
        }
      };
    }
  }, []); // Efekt uruchomi się tylko raz po załadowaniu komponentu

  return (
    <header className="header position-relative">
      <img
        src={decoration}
        alt="Dekoracja"
        className="vertical-decoration position-absolute d-none d-md-block"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8 pt-5">
            <h1 className="xl-text mt-5">
              Video Production Services for
              <span
                className="text-primary fw-bold replace-me"
                ref={replaceMeRef}
              >
                &nbsp; Small Businesses, Startups, and Enterprises
              </span>
            </h1>
            <p className="lead">
              Enhance your brand with professional video production services
              tailored to the unique needs of modern businesses.
            </p>
            <a href="#" className="btn btn-primary text-white">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
