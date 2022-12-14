import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
	const navigate = useNavigate();
	const navigateToRegistrer = () => {
    	navigate('/registrer');
	}
	const navigateToDashboard = (formValues) => {
		navigate('/dashboard', {state : {id: 1, login: true, email : formValues.email}});
	}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
		setTimeout(() => {
			navigateToDashboard(formValues);
		}, 2000);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
      <div className='login-container container-glass'>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="succes-submit text-gradient">Signed in successfully</div>
          ) : (
            <pre className="debug-submit">{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
         <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="text-gradient login-title">GET YOUR VELIB</h1>
          <h2 className="text-gradient">Login</h2>
           <div className="input-container">
             <label className='form-label text-gradient'>Email</label>
             <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}/>
           </div>
           <p className="text-gradient">{formErrors.email}</p>
           <div className="input-container">
             <label className='form-label text-gradient'>Password</label>
             <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}/>
           </div>
           <p className="text-gradient">{formErrors.password}</p>
           <div className="button-container">
             <input type="submit"/>
           </div>
         </form>
         <div className="container-login-options">
				 		<button className="button-option" onClick={navigateToRegistrer}>Registrer</button>
						<button>Forgot Password</button>
         </div>
        </div>
      );
}

export default Login;