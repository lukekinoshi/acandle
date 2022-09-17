import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Nav">
      <h1>
        <Link to="/candles">Candles</Link>
      </h1>
      <button>
        <Link to="/candles/new">New Candle</Link>
      </button>
    </div>
  );
}