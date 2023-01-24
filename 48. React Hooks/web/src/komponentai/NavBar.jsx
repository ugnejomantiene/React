import UserInfo from "./UserInfo";
import Login from "./Login"; 

function NavBar(props) {
    return (
      <div className="navbar">
        <img className="logo" src='https://cdn.worldvectorlogo.com/logos/random.svg'   alt="Logo" />
        <UserInfo markedCount={props.markedCount} />
        <Login />
      
      </div>
    );
}

export default NavBar;

