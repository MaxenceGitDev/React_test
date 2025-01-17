import "../style/Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <body className="body-home">
      <section className="section-vide">
        <div className="Vide" />
      </section>
      <h1>Find Your Next Adventure Today</h1>
      <p>
        Plan trips effortlessly with seamless booking and unforgettable
        adventures
      </p>
      <div className="div-button">
        <Link to="/List">
          <button className="button" type="button">
            Click Here
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
    </body>
  );
}
