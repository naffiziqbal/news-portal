import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
import Main from "./Layout/Main";
import Login from "./User/Login/Login";
import SignUp from "./User/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/news", element: <News /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
