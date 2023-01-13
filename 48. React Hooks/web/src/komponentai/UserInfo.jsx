function UserInfo(props) {
    return (
      <div className="user-info">
        <div>
          <p>Name</p>
          <p>Marked Articles: {props.markedCount}</p>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/166/166258.png" alt="User Icon" className="user-icon" />
        
      </div>
    );
}
  
 

export default UserInfo;