import "./Searchbar.css";
export default function Searchbar() {
  return (
    <div className="InputContainer">
      <input
        placeholder="Here to research.."
        id="input"
        className="input"
        name="text"
        type="text"
      />
    </div>
  );
}
