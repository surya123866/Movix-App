import { useNavigate } from "react-router-dom";

import "./styles.scss";

const Account = () => {
  const navigate = useNavigate();
  const onClickLogOut = () => {
    navigate("/");
  };
  return (
    <div className="account-container">
      <div>
        <h1 className="heading">Account</h1>
        <hr className="hz-line" />
        <div className="membership-container">
          <p className="member-details">Member ship</p>
          <div className="user-details">
            <p className="username">suryakommanapalli80@gmail.com</p>
            <p className="password">Password: **********</p>
          </div>
        </div>
      </div>
      <hr className="hz-line" />
      <div>
        <div className="plan-details-container">
          <p className="member-details">Plan Details</p>
          <p className="username">Premium</p>
          <p className="plan-type">Ultra HD</p>
        </div>
        <hr className="hz-line" />
      </div>
      <button type="button" onClick={onClickLogOut} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Account;
