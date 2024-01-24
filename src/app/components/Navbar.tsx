import AuthModal from "./AuthModal";
const Navbar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <a href="" className="font-bold text-gray-700 text-2xl">
        {" "}
        OpenTable{" "}
      </a>
      <div>
        <div className="flex">
          <AuthModal isSingnIn={true} />
          <AuthModal isSingnIn={false} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
