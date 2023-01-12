import UserInfo from "./UserInfo";

function NavBar(props) {
    return (
      <div className="navbar">
        <img src='https://cdn.worldvectorlogo.com/logos/random.svg' alt="Logo" className="logo" />
        <UserInfo markedCount={props.markedCount} />
      </div>
    );
  }

export default NavBar;