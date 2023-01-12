function UserInfo(props) {
    return (
      <div className="user-info">
        <img src="https://w7.pngwing.com/pngs/146/551/png-transparent-user-login-mobile-phones-password-user-miscellaneous-blue-text-thumbnail.png" alt="User Icon" className="user-icon" />
        <p>Name</p>
        <p>Marked Articles: {props.markedCount}</p>
      </div>
    );
  }
  
 

export default UserInfo;