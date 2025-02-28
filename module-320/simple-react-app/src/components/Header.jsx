import logo from '../assets/react.svg'

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="" />
        <h1>Store</h1>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
      </nav>
    </header>
  );
}

export default Header;
