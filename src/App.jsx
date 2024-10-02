import LandingPage from "./components/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";
import SuccessPage from "./components/SucessPage";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/success/:action",
      element: <SuccessPage />,
    },
    { path: "/error", element: <Error /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
