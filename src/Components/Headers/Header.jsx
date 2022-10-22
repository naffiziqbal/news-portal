import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Profile from "../../Profile/Profile";
import BulkUser from "../../User/BulkUser/BulkUser";
import { AuthContext } from "../../UserContext/UserContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut =()=> {
    logOutUser()
    .then(()=> {})
    .catch(err => console.log(err.message)
    )
  }
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <Link to="/home" class="btn btn-ghost normal-case text-xl">
            World Wide
          </Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li tabindex="0">
              <Link to="/category">
                Category
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul class="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
          <ul class="flex items-center">
            <>
            {user?.uid ? <Profile /> : <BulkUser/>}
              {!user?.uid ? (
                <>
                  <li className="mx-2">
                    <Link to="/login">Log in</Link>
                  </li>
                  <li className="mx-2">
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </> 
              ) : <button className="mx-2 text-white  bg-yellow-300 p-2 rounded-lg" onClick={handleLogOut}> Log Out </button>}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
