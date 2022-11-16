import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dropdown = () => {
    const { logout } = useAuth0();
  return (
    <div className="dropdown">
      <button onClick={() => logout({ returnTo: window.location.orogin})} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dropdown;
