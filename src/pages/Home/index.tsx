import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
      <div>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/login"><button>Log In</button></Link>
      </div>
    </div>
  );
}

export default Home;