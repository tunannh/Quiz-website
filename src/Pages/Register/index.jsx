import "./register.css"
import { generateToken } from "../../../helper/generateToken";
import { checkExist, getListUser, register } from "../../../fetAPI/userService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Register() {
  const [user, setUser] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListUser();
      setUser(result);
    }
    fetchApi();
  }, [])
  const toLogin = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const checkEmail = await checkExist("email", email)
    if (checkEmail.length > 0) {
      alert("Email already exist")
    }
    else {
      const inForAccount = {
        fullName: fullName,
        email: email,
        password: password,
        token: generateToken(),
        id: user.length.toString()
      };
      alert("Sign up successful");
      toLogin("/login");
      const result = await register(inForAccount);
      
      // if (result) {
      //   alert("Sign up successful")
      //   toLogin("/login")
      // } else {
      //   alert("Sign up failed")
      // }
    }
  }
  return (
    <>
      <section className="register">
        <h2>Sign up to QuizWeb</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="fullname">
              Full Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Your full name"
            />
          </div>

          <div className="input">
            <label htmlFor="email">
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="input">
            <label htmlFor="pw">
              Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              id="pw"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </section>
    </>
  )
}
export default Register