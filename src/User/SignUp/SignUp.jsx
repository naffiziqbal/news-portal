import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const SignUp = () => {
  const { user, createUser } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then( (result)=>{
        const user = result.user;
        console.log(user);
        form.reset();
        setUser(user)
    } )
    .catch((err)=> {
        console.log(err.message);
        setUser(null)

        
    })
    

    alert("Form Submit");
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="namea"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                />
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
                  Already Have an Account?{" "}
                  <Link className="text-yellow-500" to="/login">
                    Log In Now
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
