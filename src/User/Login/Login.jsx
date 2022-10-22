import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {
  const { user, userLogIn, googleSignUp, UserLogInGitHub } = useContext(AuthContext);
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
  
    }
//   Log In Using Google 
  const handleLogInWithGoogle = ()=> {
    googleSignUp()
    .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

//   Log In Using Github 
  const handleLogInWithGithub = ()=> {
    UserLogInGitHub()
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
            <div className="thirdParty flex justify-center flex-col p-4">
            <button onClick={handleLogInWithGoogle} className="my-2 border border-yellow-400 flex items-center rounded-lg justify-evenly hover:bg-slate-200 duration-300">
                <img className="w-12 rounded-full" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2abd662597191.5a9589b09ddf5.jpg" alt="" />
                Log In With Google</button>
            <button onClick={handleLogInWithGithub}  className="border border-yellow-400 flex items-center rounded-lg justify-evenly hover:bg-slate-200 duration-300">
                <img className="w-8 rounded-full"  src="https://www.kindpng.com/picc/m/718-7187053_close-eyes-vector-github-logo-icon-png-transparent.png" alt="" />
                Log In With Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
