import React from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const SignOut=()=>{
    const history = useHistory();
    const handleLogout = async () => {
      await auth.signOut();
      history.push("/");
    };
    return (
      auth.currentUser && (
        <button className="sign-out" onClick={handleLogout}>
          Sign Out
        </button>
      )
    );
  }
  

export default SignOut;
