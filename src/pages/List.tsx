import Card from "../components/Card";
import Categories from "../components/Categories";
import Searchbar from "../components/searchbar";
import "../style/List.css";
export default function List() {
  return (
    <body className="body-list">
      <section className="research">
        <Searchbar />
      </section>
      <section className="categories">
        <Categories />
        <Categories />
        <Categories />
      </section>
      <h2 className="list-title">Latest Price</h2>
      <section>
        <Card />
      </section>
      <section className="menu" />
    </body>
  );
}
