import UserInfo from "./UserInfo";

function NavBar(props) {
    return (
      <div className="navbar">
        <img className="logo" src='https://cdn.worldvectorlogo.com/logos/random.svg'   alt="Logo" />
        <UserInfo markedCount={props.markedCount} />
      </div>
    );
}

export default NavBar;

