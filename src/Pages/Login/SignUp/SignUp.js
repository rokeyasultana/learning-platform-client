import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
  const navigate = useNavigate();
  const {providerLogin, logInWithEmailPassword,gitHubLogIn} = useContext(AuthContext)

  const googleProvider = new GoogleAuthProvider()
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";
const handleGoogleSignIn = ()=> {
providerLogin(googleProvider)
.then(result =>{
  navigate(from, { replace: true });
})
.catch(error => console.error(error));
};

const handleSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const photoURL = form.photoURL.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log(name,photoURL);

}
const handleGigHubLogIn = () => {
  gitHubLogIn()
    .then((result) => {
      navigate(from, { replace: true });
    })
    .catch((error) => console.error(error));
};

    return (
        <div>
            <div >
  <div>
    <h2 className='Text-3xl text-center'> Sign Up</h2>
    <div class="flex mx-auto card w-96  shadow-xl">
   

<div class="card-body">
        <form onSubmit={handleSubmit} >

        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>

          </label>
          <input type="text" placeholder="your name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">PhotoURL</span>

          </label>
          <input type="text" placeholder="photo URL" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" required />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" required/>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-primary">Sign Up</button>
        </div>
        </form>
        <small>Already have an account?<Link to='/login'><span className='text-purple-400'> Please Login</span></Link></small>
      </div>
</div>
<div className='text-center mt-5 mb-3'>
   <button  onClick={handleGoogleSignIn} class="btn btn-outline btn-primary">Google login</button>
   </div>
   <div className='text-center mt-5 mb-3'>
   <button   onClick={handleGigHubLogIn}class="btn btn-outline btn-primary">Github login</button>
   </div>
    </div>
  </div>
</div> 
    );
};

export default SignUp;