import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row rounded-full p-2 gap-4 bg-green-900">
      <Link className="p-2 rounded-full bg-green-800 hover:bg-green-700" to="/">
        Cards
      </Link>
      <Link
        className="p-2 rounded-full bg-green-800 hover:bg-green-700"
        to="/addCard"
      >
        Add a card
      </Link>
    </nav>
  );
}
export default Navbar;
