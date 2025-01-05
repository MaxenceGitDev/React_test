import "./Card.css";

export default function Card() {
  return (
    <article className="card">
      <section className="card__hero">
        <header className="card__hero-header">
          <span>$150/night</span>
          <div className="card__icon">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              height="20"
              width="20"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
              <path
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
        </header>
      </section>

      <footer className="card__footer">
        <div className="card__job-summary">
          <div className="card__job">
            <h3>Bora Bora 📍 </h3>
          </div>
        </div>

        <button className="card__btn" type="button">
          view
        </button>
      </footer>
    </article>
  );
}
