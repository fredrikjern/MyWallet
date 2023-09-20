import  Navbar  from "./Navbar";
function Header(params) {
  return (
    <header className="bg-green-700 p-2 flex">
      <h1 className="text-lg mx-auto p-3"> E-wally</h1>
      <Navbar />
    </header>
  );
}
export default Header;
