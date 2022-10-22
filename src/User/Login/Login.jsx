import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {
  const { user, userLogIn } = useContext(AuthContext);
  console.log(user);
  const handleFromSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    alert("Form Submitted");
    
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Log In Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleFromSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label"></label>
                <p>
                  Don't Have an Account?{" "}
                  <Link className="text-yellow-500" to="/signup">
                    Register Now
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white" type="submit">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
