// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SigninPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:4000/auth/login", {
//         email,
//         password,
//       });
//       navigate("/success");
//     } catch (error) {
//       console.log(error);
//       navigate("/error");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Sign In</h1>
//       <form onSubmit={handleLogin} className="form">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />{" "}
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />{" "}
//         <br />
//         <div className="className"></div>
//         <button type="submit" className="button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SigninPage;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SigninPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:4000/auth/login", {
//         email,
//         password,
//       });
//       navigate("/success/signin");
//     } catch (error) {
//       console.log(error);
//       navigate("/error");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Sign In</h1>
//       <form onSubmit={handleLogin} className="form">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit" className="button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SigninPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fullstackapp-1-0wyh.onrender.com/auth/login", {
        email,
        password,
      });
      navigate("/success/signin");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
