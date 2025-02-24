import PerScholasLogo from "./PerScholasLogo";

function NavBar() {
  // const username = "Abe";

  const userInfo = {
    username: "Abe",
  };

  return (
    <nav className="mt-5" onClick={() => alert("clicked")} style={styles}>
      <PerScholasLogo />

      <a href="#" className="some-class">
        Home
      </a>
      <a href="#">About</a>

      <div>
        Welcome, {userInfo.username} cart {50 + 67}
      </div>
    </nav>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-around",
};

export default NavBar;
