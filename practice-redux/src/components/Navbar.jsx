const Navbar = () => {
  return (
    <nav className="flex justify-between mb-10 items-center border p-5 rounded">
      <div>
        <h1 className="text-2xl">Learning Redux Toolkit</h1>
      </div>
      <ul className="flex gap-9 items-center">
        <li>bla</li>
        <li>blah</li>
        <li>blahhh</li>
        <li className="px-5 py-1 border bg-slate-600 rounded text-white">
          cart: <span></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
