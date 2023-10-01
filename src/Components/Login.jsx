import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

  const {logIn, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  


    const handleLogin = e => {
        e.preventDefault();
        const email = (e.target.email.value);
        const pass = (e.target.password.value);
        console.log(email, pass);

        // user login in firebase
        logIn(email, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
          e.target.reset();
          navigate('/');
        })
        .catch(error => console.log(error));
    }


    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate('/');
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
             <form onSubmit={handleLogin}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" 
                className="input input-bordered"
                name="email" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"
                name="password" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
             </form>
             <p>Don't have an account? <Link to={"/register"}>
             <button className="btn btn-link ">Register</button>
             </Link></p>

             <p><button onClick={handleGoogleLogin} className="btn btn-ghost">Google</button></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;