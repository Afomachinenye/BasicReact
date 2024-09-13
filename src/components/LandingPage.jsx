import { Link } from "react-router-dom";
import SigninPage from "./SigninPage";
import SignupPage from "./SignupPage";

const LandingPage = () => {
  return (
    <div>
      <h1> Welcome to Kneyx-Stores </h1>

      <Link to="/signin" className="button1">
        {" "}
        SignInPage
      </Link>
      <Link to="/signup" className="button1">
        {" "}
        SignUpPage
      </Link>
    </div>
  );
};

export default LandingPage;
